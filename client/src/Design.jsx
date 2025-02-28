import React from "react";

const Design = () =>{
    let h1Style = {
        color: "red",
        padding: "10px",
        margin: "10px",
    };
  return (
    <>
   <h1 style={h1Style}> Hello samid</h1>
   <p style={{backgroundColor: "red", color: "blue"}}>Hello I am samid</p>
   </>
  )
}

export default Design

/*
There are 4 ways to use Css in React

1. Global CSs
2. Inline Css
3. Module Css
4. Styled Frameword CSs

Example: Bootstrap,TailWind,MaterialUI

1. Global Css

Where the styling gets applied to complete project 
using index.css

2. Inline Css

Applying to a Component using Inline Tag with a Object of CSS

let style  = {
    backgroundColor: "red";
    margin: 10px;
    padding: 10px
}

*/