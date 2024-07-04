import { useReducer, useState } from "react";
import "./index.css";


export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
const initialState={count:0,step:1};
function reducer(state,action){
  switch(action.type){
    case "dec":
       return {...state,count:state.count-state.step};
    case "inc":
       return {...state,count:state.count+state.step};
    case "reset":
       return initialState;
    case "setCount":
       return {...state,count:action.payload};
    case "setStep":
       return {...state,step:action.payload};
  default:
    throw new Error("unknown action");
  }
}

function Counter() {
  const [state, dispatch] =useReducer(reducer,initialState); 
 const{count,step}=state;

  const date = new Date();
  date.setDate(date.getDate() + count);
function handleReset(){
  dispatch({type:"reset"});
  
}

  return (
    <div>
      <div>
        <input type="range" value={step} onChange={(e)=>dispatch({type:"setStep",payload:Number(e.target.value)})}/>
        <span>Step: {step}</span>
        
      </div>

      <div>
        <button onClick={()=>dispatch({type:"dec"})}>-</button>
        <span>Count: {count}</span>
        <button onClick={()=>dispatch({type:"inc"})}>+</button>
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
        <button onClick={()=>handleReset()}>Reset</button>
       </div>):null}
       </div>
    
  );
}