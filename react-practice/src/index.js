import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function CoinToss() {

  const heads = 'heads';
  const tails = 'tails';
  let coinFlip;
  
  const genCoin = () => {

  let randomNum = Math.floor(Math.random() * 2);

  if (randomNum === 0) {
    coinFlip = heads;
  } else {
    coinFlip = tails;
  }
  return randomNum;
  };


  return (<div>
      <h1>{genCoin}</h1>

  </div>)

}

function AddDigitalClock() {
 
  const [ticker, setTicker] = useState(time);
  var today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const refreshClock = () => {
    setTicker(time);
  }
  
return <p></p>

}





function ChangeColor() {
  const [color, setColor] = useState("white");
  const changeRed = () => {

    setColor("red")
  }

  const changeBlue = () => {

    setColor("blue")
  }

  document.body.style.background = color;

  return (
  <div>
  <button onClick={changeRed}>Change to Red</button>
  <button onClick={changeBlue}>Change to Blue</button>
  </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

return (
  <div>
    <h1>The count is {count}</h1>
    <button onClick={increment}>Add</button>
    <ChangeColor />
    <AddDigitalClock />

  </div>
)
}


ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <CoinToss />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
