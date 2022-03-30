import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

function DogBreed() {
  const [dog, setDog] = useState('');
  let breed = '';
  let questionOne = "Do you want a large or small dog?";
  let questionTwo = "Do you want a protective dog or companion dog?";
  let questionThree = "Do you want a active dog or inactive dog?";

  let domBreed = 'Kangal';
  let subBreed = 'Chihuahua';
  return(
    <div>
      <input type = "text"></input>
      <button type="button">Yes</button>
      <input type = "text"></input>
      <button type="button">Yes</button>
      <input type = "text"></input>
      <button type="button">Yes</button>
    </div>
  )


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
