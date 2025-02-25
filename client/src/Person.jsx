import React from 'react'

function Person() {

    const personDetails = {
        name: 'SAmid',
        age: 23,
        phone: "12345678",
        email: "samjalna005@gmail.com",
    };

  return (
    <>
    <h1>Person Details</h1>
    <p>Name: {personDetails.name}</p>
    <p>Age: {personDetails.age}</p>
    <p>Phone: {personDetails.phone}</p>
    <p>Email: {personDetails.email}</p>
    <hr />
    <br />
    </>
  )
}

export default Person