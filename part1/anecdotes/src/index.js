import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let index = -1

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const handleOnClickRandom = () => {
    let random = Math.floor(Math.random()*6)
    if (random === 6) random = 0
    setSelected(random)
  }

  const handleOnClickVote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy) 
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes</p>
      <Button onClick={handleOnClickVote} text='Vote' />
      <Button onClick={handleOnClickRandom} text='Next Anecdote' />
      <Most votes={votes} index={index} />
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
      <button onClick = {onClick}>{text}</button>
      
  )
}

const Most = ({votes,index}) => {
  for (var i=0; i<votes.length; i++){
    if (votes[i] >= Math.max(...votes) && index !== i) index = i
  }
  return (
    <div>
      <h1>Anecdote with the most votes:</h1>
      <p>{anecdotes[index]}</p>
      <p>This anecdote has {votes[index]} votes</p>
    </div>
  )
}
 
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)

