import React, { useState } from "react";

const Object_State = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });


  const change = (field,e) => {
    setInput({
        ...input,
        [field]: e.target.value,
    })
  } 

  return (
    <>
    
    <input type="text" placeholder="Enter Your Name" value={input.name} onChange={(e) => change("name",e)} />
    <br /><br />
    <input type="Email"  placeholder="Enter Your Email" value={input.email} onChange={(e) => change("email",e)}/>
    <br /><br />
    <input type="Password" placeholder="Enter Your Password" value={input.password} onChange={(e) => change("password",e)} />
    <br /><br />
    <h1>Name:- {input.name}</h1>
    <h1>Email:- {input.email}</h1>
    <h1>Password:- {input.password}</h1>
    
    </>
  );
};

export default Object_State;
