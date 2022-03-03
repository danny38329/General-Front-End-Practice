import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function CoinToss() {
  const [face, setFace] = useState('none');
  const heads = 'heads';
  const tails = 'tails';
  
  
  const genCoin = () => {

  let randomNum = Math.floor(Math.random() * 2);

  if (randomNum === 0) {
    setFace('heads');
  } else {
    setFace('tails');
  }
  return face;
  };


  return (<div>
    <p>
      <h1>the coin flip is: {face}</h1>
    </p>
      <button onClick={genCoin}>coin</button>
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
