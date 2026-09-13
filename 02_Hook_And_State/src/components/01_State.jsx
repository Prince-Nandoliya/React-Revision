import React, { useState } from "react";

const State = () => {
  const [count, SetCount] = useState(110);

  const increment = () => {
    SetCount(count + 1);
  };

  const decrement = () => {
    SetCount(count - 1);
  };

  return (
    <>
      <h1>count number = {count}</h1>

      <button onClick={increment}>+1</button>
      <br />
      <br />

      <button onClick={decrement}>-1</button>
    </>
  );
};

export default State;
