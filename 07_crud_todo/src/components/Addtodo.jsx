import React, { useState } from "react";

const Addtodo = ({handleadd}) => {
  const [input, setInput] = useState({
    Task: "",
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

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <input type="text" placeholder="Enter Task" />
        <br />
        <br />
        <input type="text" placeholder="Enter Description" />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Addtodo;
