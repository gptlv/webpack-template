import { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment counter
      </button>
    </div>
  );
};

export default ClickCounter;
