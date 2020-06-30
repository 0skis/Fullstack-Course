import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'

const App = (props) => {
	const [notes, setNotes] =useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)

	const hook = () => {
		console.log('effect')
		axios
			.get('http://localhost:3001/notes').then(response => {
				console.log('promise fulfulled')
				setNotes(response.data)
			})
	}

	useEffect(() => {
		noteService
			.getAll()
			.then(response => {
				setNotes(response.data)
			})
	}, [])

	const toggleImportanceOf = (id) => {
  		const note = notes.find(n => n.id === id)
  		const changedNote = { ...note, important: !note.important }
		
		noteService
			.update(id, changedNote).then(response => {
				setNotes(notes.map(note=> note.id !== id ? note : response.data))
			})
			.catch(error => {
				alert(
					`the note '${note.content}' was already deleted from the server`
				)
				setNotes(notes.filter(n => n.id !== id))
			})
	}

	useEffect(hook, [])

	console.log('render', notes.length, 'notes')

 	const addNote = (event) => {
        event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		}

		noteService
			.create(noteObject)
			.then(response => {
				setNotes(notes.concat(response.data))
				setNewNote('')
			})
  } 

  const handleNoteChange = (event) => {
			setNewNote(event.target.value)
	}

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
		<div>
			<button onClick={() => setShowAll(!showAll)}>
				show {showAll ? 'important' : 'all'}
			</button>
		</div>
      <ul>
        {notesToShow.map(note => 
		  <Note key={note.id} note={note}
		  toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
          New Note: <input 
        	value={newNote}
        	onChange={handleNoteChange}
        	/>
          <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App