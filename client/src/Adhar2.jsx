import React from 'react'

function Adhar2({name, age}) {
  return (
    <>
    <h1>My name is {name}</h1>
    {age} && <h1>My age is {age}</h1> 
    {age >= 18 ? <h1>You can vote</h1> : <h1> You can't Vote</h1>}
    </>
  )
}

export default Adhar2
