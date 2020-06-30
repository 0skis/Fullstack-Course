import React from 'react'
import PersonService from '../Services/PersonService'

const Person = ({ person, persons, setPersons }) => {

    const removePerson = (event) => {
        event.preventDefault()
        console.log(person)
        if (window.confirm(`Delete ${person.name}?`)) {
            PersonService
                .remove(person.id)
                .then(response => {
                    console.log(response)
                    setPersons(persons.filter(x => x.id !== person.id))
                })
        }
    }

    return (
        <li key={person.id}>
            <button onClick={removePerson}>X </button>
            {''} {person.name} {person.number}
        </li>
    )
}

export default Person