import React from 'react'
import Addtodo from './components/add'
import { useState } from 'react'
import ListTodo from './components/ListTodo'
const App = () => {

  const defaulTodo=[
    {
      id:1,
      Task:"new",
      Description:"new Description"
    },
    {
      id:2,
      Task:"new 1",
      Description:"new Description 1"
    }
  ]

  const[todos,setTodos] = useState(defaulTodo)

  return (
    <>
  <Addtodo todos={todos} setTodos={setTodos}/>
  <br /><br />
  <ListTodo toods={todos}/>
    </>
  )
}

export default App
