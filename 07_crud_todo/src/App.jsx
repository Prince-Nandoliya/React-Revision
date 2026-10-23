import React, { useState } from "react";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      Task: "New Task",
      Description: "New Description add",
    },
    {
      id: 2,
      Task: "New Task 1",
      Description: "New Description add 1",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleadd = () => {
    const newTodo = {
      id: new Date().getTime(),
      
    }
  }

  return <></>;
};

export default App;
