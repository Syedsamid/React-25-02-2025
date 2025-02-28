// Ternary operator

import React from 'react'

function Adhar({aadharNo, name, email, age}) {
  return (
    <>
    <h1>
        My Name is {name} and age is {age}
    </h1>
    {age > 18 ? <h1>You can vote</h1> : <h1>You can't vote</h1>}
    </>
  )
}

export default Adhar
