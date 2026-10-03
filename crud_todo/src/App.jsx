//App.jsx
import React, { useState } from "react";
import Add from "./components/Add"
import List from "./components/List"


const App = () => {
  const initialTodos = [
    {
      id: 1,
      Task: "mock Round ",
      Description: "you have prepared  for mock Round",
    },
    {
      id: 2,
      Task: "node.js mock round",
      Description: "you have to prepared  for node.js mock round",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const [editval, setEditval] = useState(null);

  const handleadd = (input) => {
    if (!input.Task || !input.Description) {
      alert("Task data are required");
      return;
    } else if (editval) {
      setTodos((todos) =>
        todos.map((t) =>
          t.id === editval.id
            ? { Task: input.Task, Description: input.Description }
            : t,
        ),
      );
      setEditval(null);
    } else {
      const newtodo = {
        id: new Date().getTime(),
        Task: input.Task,
        Description: input.Description,
      };
      setTodos((prev) => [...prev, newtodo]);
      alert("Task add successfully");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id);

    setEditval(todo);
  };

  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
            }
          : t,
      ),
    );
  };

  const TotalTask = todos.length;

  const completedTasks = todos.filter((todos) => todos.completed).length;
  const pendingTasks = todos.filter((todos) => !todos.completed).length;

  return (
    <>
    <h1 className="card text-center text-white w-75 mx-auto mt-3">todo list</h1>
      <div className="container  mt-5 w-75 ">
        <div className="row text-center">
          <div className="col-md-4 ">
            <div className="card text-white  rounded-3">
              <h5 className="fw-bold">Total Task</h5>
              <h2>{TotalTask}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  text-white rounded-3">
              <h5 className="fw-bold">Completed Task</h5>
              <h2>{completedTasks}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white rounded-3 ">
              <h5>pending Task</h5>
              <h2>{pendingTasks}</h2>
            </div>
          </div>
        </div>
      </div>
      <Add addtodo={handleadd} editval={editval} />
      <br />
      <br />
      <List
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCheck={handleCheck}
 
      />
    </>
  );
};

export default App;
