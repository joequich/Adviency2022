import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={(e) => setCount(count - 1)}>-</button>
      <input
        className="form-add__input-url input-form"
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.valueAsNumber)}
      />
      <button onClick={(e) => setCount(count + 1)}>+</button>
    </>
  );
}
