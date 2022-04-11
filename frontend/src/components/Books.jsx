import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Books = () => {
  const [books, setBooks] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  useEffect(() => {
    fetch("/books")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  });

  function handleClick(event) {}
  return (
    <div className="container">
      <h2>Books page</h2>
      <div className="bookDiv">
        {books.map((book) => (
          <div>
            <h4>Title : {book.title}</h4>
            <h4>Category : {book.content}</h4>
            <button className="btn btn-small btn-info" onClick={handleClick}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
