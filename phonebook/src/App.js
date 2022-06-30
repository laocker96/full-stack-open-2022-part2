import axios from 'axios';
import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phonebookService from './services/phonebookService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    phonebookService
      .getAllPersons()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);

  const handleSubmit = (event) => {

    event.preventDefault();



    if (persons.map(person => person.name).find(name => name.toLowerCase() == newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);
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
        });
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
      <Filter searchedName={searchedName} handleSearchedNameChange={handleSearchedNameChange} />
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App