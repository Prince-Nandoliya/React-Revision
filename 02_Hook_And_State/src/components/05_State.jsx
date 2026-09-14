import React, { useState } from "react";

const State_05 = () => {
  const [Email, setEmail] = useState("");

  const [Password, setPassword] = useState("");

  const newEmail = (e) => {
    setEmail(e.target.value);
  };

  const newPassword = (p) => {
    setPassword(p.target.value);
  };

  return (
    <>
    <input type="Email" value={Email} onChange={newEmail} />
    <br />
    <br />
    <input type="Password" value={Password} onChange={newPassword} />
    <br />
    <br />
    <h1>Email:- {Email}</h1>
    <h1>Password:- {Password}</h1>
    
    </>
  );
};

export default State_05;
