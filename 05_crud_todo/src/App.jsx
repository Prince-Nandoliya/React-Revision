import React, { useState } from "react";
import Addtodo from "./components/Addtodo";
import Listtodo from "./components/Listtodo";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      Task: "new project",
      Description: "creat new project",
    },
    {
      id: 2,
      Task: "new car",
      Description: "buy a new car",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addtodo = (input) => {
    if (!input.Task || !input.Description) {
      alert("Task data are required");
      return;
    } else {
      const newtodo = {
        id: new Date().getTime(),
        Task: input.Task,
        Description: input.Description,
      };
      setTodos((prev) => [...prev, newtodo]);
      alert("new task add successfully");
    }
  };

  return (
    <>
      <Addtodo addtodo={addtodo} />
      <Listtodo todos={todos} />
    </>
  );
};

export default App;
