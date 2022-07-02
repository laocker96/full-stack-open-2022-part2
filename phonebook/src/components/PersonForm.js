import { useState } from "react";
import phonebookService from "../services/phonebookService";

const PersonForm = ({ persons, setPersons, setMessage }) => {

    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        const findPerson = persons.find(person => person.name.toLowerCase() == newName.toLowerCase());

        if (findPerson) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

                const findPersonCopy = { ...findPerson, number: newPhone };
                phonebookService
                    .updatePerson(findPersonCopy)
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));
                        setMessage(`Updated ${updatedPerson.name}'s phone number`);
                        setTimeout(() => {
                            setMessage(null)
                        }, 2000);
                    });
            }
        } else {

            const person = {
                name: newName,
                number: newPhone
            };

            phonebookService
                .savePerson(person)
                .then(savePerson => {
                    setPersons(persons.concat(savePerson));
                    setNewName("");
                    setNewPhone("");
                    setMessage(`Added ${savePerson.name}`);
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000);
                });
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value);
    }

    return (
        <>
            <h2>add a new</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} required />
                </div>
                <div>
                    number: <input type="tel" value={newPhone} onChange={handlePhoneChange} pattern="[0-9]{2}-[0-9]{2}-[0-9]{7}" required />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    );
}

export default PersonForm;