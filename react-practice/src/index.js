import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function RandomQuotes() {
  
}

function Counter() {
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount((prevCount) => prevCount + 1);
  }
  return(
    <div>
      <button onClick={addNumber}>CounterADD</button>
      <h1>{count}</h1>
    </div>
  )
}


function ToDoList() {
  const [note, setNote] = useState("");

  const addNote = () => {

  }

  return( 
    <div>
      <input type="text" />
      <button type="button">Add</button>
    </div>
  )
}



function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);

    useEffect(() => {
    let interval = setInterval(()=> {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h1>{timer}</h1>
    </div>
  )};





ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
