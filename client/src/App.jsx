// import React from 'react'

// const  App = () => {
//     let num = [1,2,3,4,5,6,7]
//     console.log(num);
//     let name = "samid"
//     let age = 23;
//   return (
//     <>
//     <div>
//         <h1>SAmid</h1>
//         <h2>Omer</h2>
//         <h3>Ismile</h3>
//         <p>Hello My name is {name},{age}</p>
//         <h3>{2+2}</h3>
//         <h2>2+2</h2>
//         <h4>{2 + 12 / 4}</h4>
//     </div>
//     </>
//   )
// }

// export default App

// import React from 'react'

// function App() {

//     let cfiStudent = {
//         fullName: "samid",
//         age: 23,
//         address: "Hyderabad",
//         isMarried: false,
//         isAlive: true,
//         phone: 8010939480,
//         email: "samjalna005@gmail.com",
//     };

//     return (
//         <div>
//             <h1>my name is {cfiStudent.fullName}</h1>
//             <h2>mt age is {cfiStudent.age}</h2>
//             <h3>my address is {cfiStudent.address}</h3>
//             <h4>my phone number is {cfiStudent.phone}</h4>
//             <h5>my email is {cfiStudent.email}</h5>
//         </div>
//     )
// }

// export default App


// import React from 'react'

// function App() {

//     const mobilePhone = {
//         brand: "Apple",
//         model: "Ipad 16 Pro MAc",
//         color: "black",
//         stroage: "512GB",
//         price: 899,
//     };

//     return (
//         <>
//             <h1>My Mobile Phone</h1>
//             <p>Brand: {mobilePhone.brand}</p>
//             <p>model {mobilePhone.model}</p>
//             <p>color: {mobilePhone.color}</p>
//             <p>stroage: {mobilePhone.stroage}</p>
//             <p>price: {mobilePhone.price}</p>
//         </>
//     )
// }

// export default App



// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App


// import React from 'react'
// // rafce
// import Person from './Person'

// // rafc
// import {Person} from "./Person"




// import React from 'react';
// import Person from './Person';

// function App() {
//   return (
//     <>
//     <h1>Hello World</h1>
//     <Person/>
//     <Person/>
//     {/* <Person></Person> */}
//     </>
//   )
// }

// export default App


//! Props

import React from 'react';
import Person from './Person';

function App() {
  return (
    <>
    <h1>Person Details</h1>
    <Person name="Suhail" age="23" phone="4567" email="suhail@code.in"/>
    <Person name="samid" age="22" phone="345678" email="samjalna005@gmmail.com"/>
    <Person name="muzammil" age="25" phone="9422927306" email="suhail@code.in"/>
    </>
  )
}

export default App