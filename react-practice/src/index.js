import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

function DogBreed() {
  const [dog, setDog] = useState('');

}

function DigitalClock() {
  const [time, setTime] = useState(0);


  useEffect(()=> {
    let intervalId = setInterval(setTime(time + 1), 10);
    
  }, []);

  return(
    <div><h1>{time}</h1></div>
  )};

ReactDOM.render(
  <React.StrictMode>
  <DigitalClock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
