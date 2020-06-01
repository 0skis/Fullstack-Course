import React from 'react'

const Total = ({ course }) => {
    var sum = course.parts.reduce((x, part) =>  x + part.exercises, 0)
    return(
      <p>Number of exercises: {sum}</p>
    ) 
  }

export default Total