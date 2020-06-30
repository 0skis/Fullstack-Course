import React from 'react'
import personService from '../Services/PersonService'

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, persons, setPersons }) => {

    const addPerson = (event) => {
        event.preventDefault()
        console.log(newName)
        if (persons.map(x => x.name).includes(newName)) {
          alert(`${newName} number has been updated`)
          const temp = persons.filter(x => x.name.includes(newName))
          personService
            .update(temp[0].id, {name: newName, number: newNumber, id: temp[0].id})
            .then(response => {
              setPersons(persons.map(x => x.name !== newName ? x : response.data))
            })
        } else {
          console.log('Add clicked')
          const personObject = {
            name: newName,
            number: newNumber,
          }
          console.log(personObject)
          personService
            .create(personObject)
            .then(response => {
              console.log('Add data',response)
              setPersons(persons.concat(response.data))
              setNewName('')
              setNewNumber('')
            })
        }
    }

    const handleNameOnChange = (event) => {
        setNewName(event.target.value)
      }
    
    const handleNumberOnChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameOnChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm