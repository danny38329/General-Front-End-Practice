import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(currentCount => currentCount + 1)
  };

  const decrementHandler = () => {
    setCount(currentCount => currentCount - 1)
  };

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={incrementHandler}>Increase</button>
    <button onClick={decrementHandler}>Decrease</button>

  </div>
  )


};


export default App;
