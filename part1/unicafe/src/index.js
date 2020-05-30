import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  } 
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
  } 

  let Avg=0
  if (all !== 0) Avg = (good-bad)/all
  
  let Pos=0
  if (all !== 0) Pos = good/all * 100 + " %" 
  
  return (
    <div>
      <Header name='Give Feedback' /> 
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      all={all} 
      Avg={Avg}
      Pos={Pos} 
      />
    </div>
  )
}

const Statistics = ({good, neutral, bad, all, Avg, Pos}) => {
  if (all === 0) 
  return (
  <div>
    <Header name='Statistics' />
    <p>No feedback given</p>
  </div>
  )

  return (
  <div>
      <Header name='Statistics' />
      <table>
        <tbody>
        <tr>
         <td>{'Good'}</td>
         <td>{': ' + good}</td>
        </tr>
        <tr>
         <td>{'Neutral'}</td>
         <td>{': ' + neutral}</td>
        </tr>
        <tr>
         <td>{'Bad'}</td>
         <td>{': ' + bad}</td>
        </tr>
        <tr>
         <td>{'All'}</td>
         <td>{': ' + all}</td>
        </tr>
        <tr>
         <td>{'Average'}</td>
         <td>{': ' + Avg}</td>
        </tr>
        <tr>
         <td>{'Positive'}</td>
         <td>{': ' + Pos}</td>
        </tr>
      </tbody>
      </table>
  </div>
  )
}

const Header = (prop) => <h1>{prop.name}</h1>

// const Static = ({name,value}) => <p>{name + ': ' + value}</p>

const Button = ({ onClick, text }) => <button onClick = {onClick}>{text}</button> 

  
ReactDOM.render(
  <App />,
  document.getElementById('root')
)





