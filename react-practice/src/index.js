import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals'; 

function CalendarApp() {

  const [numberDay, setNumberDay] = useState({});
  const [month, setMonth] = useState();
  const [numberArray, setNumberArray] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState('');






let may = {

}

return(
  <div>
    <h1>{}s</h1>
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
