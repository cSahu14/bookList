import React, { useState } from "react";
import axios from "axios";
const AddBook = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newBook = {
      title: input.title,
      content: input.content,
    };

    axios.post(`http://localhost:3001/add`, newBook);
  }
  return (
    <div className="container">
      <h2>Add Book</h2>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            name="title"
            autoComplete="off"
            className="form-control"
            placeholder="Book title"
            value={input.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="content"
            autoComplete="off"
            className="form-control"
            placeholder="Book category"
            value={input.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div></div>
        <button className="btn btn-lg btn-info" onClick={handleClick}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
