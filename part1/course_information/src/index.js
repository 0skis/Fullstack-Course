import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
       },
       {
         name: 'Using props to pass data',
         exercises: 7
       },
       {
         name: 'State of components',
         exercises: 14
       }
    ]
  } 

  return (
    <div>
      <Header name={course} />
      <Content list={course} />
      <Total list={course} />
    </div>
  )
}

const Header = (prop) => {
  console.log(prop)
  return (
      <h1>
        {prop.name.name}
      </h1>
  )
}

const Content = (prop) => {
  console.log(prop.list.parts)
  return (
    <div>
     <Part part = {prop.list.parts[0]} />
     <Part part = {prop.list.parts[1]} />
     <Part part = {prop.list.parts[2]} />
    </div>
  )
}

const Part = (prop) => {
  console.log(prop.part)
  return (
      <p>
        {prop.part.name} {prop.part.exercises}
      </p>
  )
}

const Total = (prop) => {
  console.log(prop.list.parts)
  let x = 0
  prop.list.parts.forEach(value => {
    x += value.exercises
  });
  return (
      <p>
        Number of exercises {x}
      </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))