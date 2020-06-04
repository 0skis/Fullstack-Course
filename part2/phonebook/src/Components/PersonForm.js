import React from 'react'

const PersonForm = ({ newName, newNumber, setNewName, setNewNumber, persons, setPersons }) => {

    const addPerson = (event) => {
        event.preventDefault()
        console.log(newName)
        if (persons.map(x => x.name).includes(newName)) {
          alert(`${newName} is already added to the phonebook`)
        } else {
          console.log('Add clicked')
          const personObject = {
            name: newName,
            number: newNumber,
            show: true,
            id: persons.length + 1,
          }
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
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