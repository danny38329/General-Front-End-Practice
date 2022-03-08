import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function StopWatch() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalOne = setInterval(setTimer(timer + 1), 1000);
    return clearInterval(intervalOne);
  }, []);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  )

}

function AddCart() {
  const [cart, setCart] = useState("");
  let emptyArray = [];
  let count = 0;

  const addButton = () => {
    count += 1;
    emptyArray.push(<h1>Item: {count}</h1>)

  }
  return (
    <div>
      <h1>AddCart Test</h1>
      <button onClick={addButton}>Add</button>
      <p>{emptyArray}</p>
    </div>
  )


}

function ExtrovertOrIntrovert() {
  const [personality, setPersonality] = useState("");

  const extrovert = () => {
    setPersonality("extrovert");
  }

  const introvert = () => {
    setPersonality("introvert");
  }

  return (
    <div>
      <h1>What is your personality?</h1>
      <button onClick={extrovert}>Extrovert</button>
      <button onClick={introvert}>Introvert</button>
      <h1>{personality}</h1>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <StopWatch />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
