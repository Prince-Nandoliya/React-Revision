import React, { useState } from "react";

const PrevState = () => {
  const [count, SetCount] = useState(0);

  const increment = () => {
    SetCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>count value:{count}</h1>

      <button
        onClick={() => {
          increment();
          increment();
          increment();
          increment();
          increment();
        }}
      >increment + 5</button><br />
      <br />
      <button onClick={increment}>increment + 1</button>
    </>
  );
};

export default PrevState;
