import React from 'react'
import { useState } from 'react'

const Addtodo = () => {

    const handleadd = () =>{
        const[input,setInput] = useState({
            Task:"",
            Description:""
        })
    }

  return (
    <>
    <form>
        <input type="text" placeholder='Enter task' />
        <br /><br />
        <input type="text" placeholder='Enter Description' />
        <br /><br />
        <button type='submit'>Add</button>
    </form>
    </>
    
  )
}

export default Addtodo
