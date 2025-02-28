import React from 'react';
import Book from './Book';
import Customer from './Customer';
import Adhar from './Adhar';
import Adhar2 from './Adhar2';
import Design from './Design';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <h1>Book Details</h1>
    <Book name="Herry potter" author="john Krakuer" year="2002" sold="2,908"/>
    <hr />
            <br />
    <Book name="Herry potter" author="john Krakuer" year="2002" sold="2,908"/>

    <Customer name="samid" email="samidsyed1720@gmail.com" phone={8010939480}/>

    <Adhar name="samid" age={14}/>
    <hr />
    <br />

    <Adhar2 name="samid syed" age={12}/>
<Design/>
<Navbar/>
    </>
  )
}

export default App