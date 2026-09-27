import React, { useState } from "react";

const Addtodo = ({ addtodo }) => {
  const [input, setInput] = useState({
    Task: "",
    Description: "",
  });

  const handlechange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    addtodo(input)

    setInput({ Task: "", Description: "" });
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Taks"
          value={input.Task}
          onChange={(e) => handlechange("Task", e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          value={input.Description}
          onChange={(e) => handlechange("Description", e)}
        />
        <br />
        <br />
        <button>add</button>
      </form>
    </>
  );
};

export default Addtodo;
