import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchedName, setSearchedName] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    if (persons.map(person => person.name).find(name => name == newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const person = {
        name: newName,
        number: newPhone
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

  const handleSearchedNameChange = (event) => {
    setSearchedName(event.target.value);
  }

  const filteredPersons = searchedName != "" ? persons.filter(person => person.name.toLowerCase().includes(searchedName.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchedName} onChange={handleSearchedNameChange} />
      </div>
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
      {filteredPersons.map(person =>
        <p key={person.name}>
          {person.name}&nbsp;{person.number}
        </p>
      )}
      {filteredPersons.length == 0 &&
        <p>No persons found</p>
      }
    </div>
  )
}

export default App