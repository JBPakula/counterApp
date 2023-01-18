import React, {useState} from 'react';
import './Counter.css';

function Counter({size}) {
  const [counter, setCounter] = useState(0);
  let btnClass = 'btn';
  let btnClassSecondary = 'btn btn--secondary';

const changeCounterValue = type => {
  if (type === 'decrement') {
    setCounter(counter - 1);
    } else if (type === 'increment') {
    setCounter(counter + 1);
    }
  }
 
  return (
    <>
      <button onClick = {() => {changeCounterValue('decrement')}} className={btnClass}>-</button>
      <span> {counter} </span>
      <button onClick = {() => {changeCounterValue('increment')}} className={btnClassSecondary}>+</button>
    </>
  ) 
}

export default Counter;
