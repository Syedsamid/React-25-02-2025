import React from "react";

const Book = ({name,author,year,sold}) => {

    return (
        <>
            <h1>Book Details</h1>
            <p>Name: {name}</p>
            <p>Auther:{author}</p>
            <p>Year: {year}</p>
            <p>sold: {sold}</p>
            <hr />
            <br />
        </>
    )
}

export default Book