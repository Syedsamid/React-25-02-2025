import React from 'react'

function Customer({name, email, phone}) {
  return (
    <>
    <h1>Name: {name}</h1>
    <h1>Email: {email}</h1>
    <h1>Phone:{phone}</h1>
    </>
  )
}

export default Customer
