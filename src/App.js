import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
function handleReset(){
  setCount(0);
  setStep(1);
}
  return (
    <div>
      <div>
        <input type="range" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        <span>Step: {step}</span>
        
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count!==0 || step!==0?(<div>
        <button onClick={handleReset}>Reset</button>
       </div>):null}
       </div>
    
  );
}