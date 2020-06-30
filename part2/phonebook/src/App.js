import React, { useState, useEffect } from 'react'
import Person from './Components/Person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import PersonService from './Services/PersonService'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const hook = () => {
    PersonService
      .getAll()
      .then(response => {
        console.log('Data recieved')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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
          <Person 
            key={person.id} 
            person={person} 
            persons={persons}
            setPersons={setPersons}/>
        )}
      </ul>
    </div>
  )
}

export default App
