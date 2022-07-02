import axios from 'axios';
import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phonebookService from './services/phonebookService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchedName, setSearchedName] = useState('');

  useEffect(() => {
    phonebookService
      .getAllPersons()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);

  const filteredPersons = searchedName != "" ? persons.filter(person => person.name.toLowerCase().includes(searchedName.toLowerCase())) : persons;

  return (
    <div>
      <Filter searchedName={searchedName} setSearchedName={setSearchedName} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <Persons filteredPersons={filteredPersons} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App