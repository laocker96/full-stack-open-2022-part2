import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('')

  const handleSubmit = (event) => {

    event.preventDefault();

    if (persons.map(person => person.name).find(name => name == newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const person = {
        name: newName,
        phone: newPhone
      };
      setPersons(persons.concat(person));
      setNewName("");
      setNewPhone("");
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}>
          {person.name}&nbsp;{person.phone}
        </p>
      )}
    </div>
  )
}

export default App