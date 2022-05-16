import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals'; 

function PhoneInput() {

  const [phone, setPhone] = useState('');
  const [display, setDisplay] = useState('');

  const addNumber = () => {
    setDisplay(phone);
    let element = document.getElementById('test');
    let drill = document.getElementById('drill');
    element.remove();
    drill.remove();
  };

  return(
  <div>
  
  <h1>{display === '' ? 
  <div>
  <input type='text' id="test" onChange={e => setPhone(e.target.value.toString()) } />
  <button type="button" id="drill" onClick={addNumber}>Add</button></div> : 
  <button type='button' >Delete</button>
}</h1>
  </div>
  )
};



ReactDOM.render(
  <React.StrictMode>
  <PhoneInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
