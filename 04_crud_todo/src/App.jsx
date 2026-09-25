import React, { useState } from "react";
import Addtodo from "./components/Addtodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      Task: "car driving",
      Description: "Go for daily driving practice",
    },
    {
      id: 2,
      Task: "bike Riding",
      Description: "Go for daily bike riding",
    },
  ];

  const addtodo = (input) => {
    const newtodo = {
      id:new Date().getTime(),
      Task:input.task,
      Description:input.Description
    };
    setTodos((prev)=> [...prev,newtodo])
  }

  const [todos,setTodos] = useState(initialTodos)

  return (
    <>
      <Addtodo  addtodo={addtodo}/>

      <ListTodo todos={todos}/>
    </>
  );
};

export default App;
