import phonebookService from "../services/phonebookService";

const Persons = ({ filteredPersons, persons, setPersons, }) => {

    const handleClick = (person) => {

        if (window.confirm(`Delete ${person.name} ?`)) {
            phonebookService
                .deletePerson(person.id)
                .then(() => {
                    console.log(`${person.name} deleted from phonebook`);
                    setPersons(persons.filter(p => p.id != person.id));
                });
        }
    }

    return (
        <>
            {filteredPersons.map(person =>
                <p key={person.name}>
                    {person.name}&nbsp;{person.number}
                    <button onClick={() => handleClick(person)}>delete</button>
                </p>
            )}
            {filteredPersons.length == 0 &&
                <p>No persons found</p>
            }
        </>
    );
}

export default Persons;