import React, { useState } from "react";

const State_02 = () => {
  const [count, SetCount] = useState();

  const [input, SteInput] = useState("");

  const change = (e) => {
    SteInput(e.target.value);
  };

  return (
    <>
      <h1>{count}</h1>

      {/* <input type="text"  value={input} onChange={change} /> */}

      {/* <input type="text" value={input} onChange={(e) => SteInput(e.target.value)} /> */}

      <input type="text" value={input} onChange={(e) => change(e)} />

      <h1>you have type = {input}</h1>
    </>
  );
};

export default State_02;
