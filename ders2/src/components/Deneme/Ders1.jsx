import { useState } from "react";

const Ders1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>Ders1</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Ders1;
