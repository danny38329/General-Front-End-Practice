import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

function DogBreed() {
  const [dog, setDog] = useState(0);
  let breed = '';
  let questionOne = "Do you want a large or small dog?";
  let questionTwo = "Do you want a protective dog or companion dog?";
  let questionThree = "Do you want a active dog or inactive dog?";

  const addToBreed = () => {
    setDog(dog + 1);
  }

  let domBreed = 'Kangal';
  let subBreed = 'Chihuahua';
  return(
    <div>
      <h3>Do you want a large dog?</h3>

      <button type="button" onClick={addToBreed}>Yes</button>
      
      <button type="button" >No</button>
      <br></br>
      <h3>Do want a friendly dog?</h3>
      <button type="button" onClick={addToBreed}>Yes</button>

      <button type="button">No</button>
      <br></br>
      <h3>Do you want an active dog?</h3>
      <button type="button" onClick={addToBreed}>Yes</button>
   
      <button type="button">No</button>
      <br></br>

      <h1>{dog > 0 ? domBreed: subBreed}</h1>
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
  <DogBreed />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
