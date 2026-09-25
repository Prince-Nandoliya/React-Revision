import React, { useState } from "react";

const Addtodo = ({addtodo}) => {
  const [input, setInput] = useState({
    task: "",
    Description: "",
  });

  const handlechange = (feild, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [feild]: e.target.value,
      };
    });
  };
//   console.log("input",input)

  const handlesubmit = (e) => {
    e.preventDefault()

    addtodo(input)

    setInput({task:"",Description:""})
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => handlechange("task", e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => handlechange("Description", e)}
        />
        <br />
        <br />
              <button type="submit">add</button>

      </form>
    </>
  );
};

export default Addtodo;
