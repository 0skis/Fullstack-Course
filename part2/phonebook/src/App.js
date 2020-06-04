import React, { useState } from 'react'
import Person from './Components/Person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567',
      show: true,
      id: 1,
    },
    {
      name: 'Oskar',
      number: '040-93879222',
      show: true,
      id: 2
    },
    {
      name: 'Daniel',
      number: '040-9386722',
      show: true,
      id: 3
    },
    {
      name: 'Isak',
      number: '040-93123572',
      show: true,
      id: 4
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} setSearch={setSearch}/>
      <h2>Add new information</h2>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App
