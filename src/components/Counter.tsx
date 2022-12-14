import { useState } from "react";

interface CounterProps {
  initialCount: number;
  onChange: (newCount: number) => void;
}

export default function Counter({ initialCount, onChange }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  function handleIncrement() {
    setCount(count + 1);
    onChange(count + 1);
  }
  function handleDecrement() {
    if (count < 1) return;
    setCount(count - 1);
    onChange(count - 1);
  }
  function handleInput(e: any) {
    if (count < 1) return;
    setCount(e.target.valueAsNumber);
    onChange(e.target.valueAsNumber);
  }
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input
        className="form-add__input-url input-form"
        type="number"
        value={count}
        onChange={handleInput}
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
