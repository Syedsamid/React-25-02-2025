import React from 'react'

// function Person() {

// const personDetails = {
//     name: 'SAmid',
//     age: 23,
//     phone: "12345678",
//     email: "samjalna005@gmail.com",
// };

//! Props
const Person = (props) => {

    return (
        <>
            <h1>Person Details</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
            <hr />
            <br />
        </>
    )
}

export default Person