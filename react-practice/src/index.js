import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals'; 


function CalendarApp() {

  const [numberDay, setNumberDay] = useState({});
  const [month, setMonth] = useState();
  const [numberArray, setNumberArray] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState('');

const daysMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

const stringDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var arr = new Array(100).fill().map((d,i)=>++i)

let revisedArr = arr.split();

let objectMay;

let may = {

};

return(
  <div>
    <h1>{revisedArr}s</h1>
  </div>
)

};


ReactDOM.render(
  <React.StrictMode>
  <CalendarApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
