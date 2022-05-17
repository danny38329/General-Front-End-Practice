import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals'; 

function PhoneInput() {

  const [phone, setPhone] = useState('');
  const [display, setDisplay] = useState('');
  const [toggle, setToggle] = useState(true);

  let inputDisplay = () => {

    return(<div>
      <input type='text' id="test" onChange={e => setPhone(e.target.value.toString())} />
      <br></br>
      <button type="button" id="drill" onClick={addNumber}>Add</button>
      </div>)};

  let phoneDisplay = () => {

    return(<div>
      <button type='button' id="third" onClick={removeNumber}>Delete</button>
    </div>)};


  const addNumber = () => {
    setDisplay(phone);
    let element = document.getElementById('test');
    let drill = document.getElementById('drill');
    setToggle(false);
  };

  const removeNumber = () => {
    let element = document.getElementById('third');
    setToggle(true);
  };



  return(
  <div>
  
  <h1>
    {toggle ? <div>
      <input type='text' id="test" onChange={e => setPhone(e.target.value.toString())} />
      <br></br>
      <button type="button" id="drill" onClick={addNumber}>Add</button>
      </div> : <div>
      <button type='button' id="third" onClick={removeNumber}>Delete</button>
    </div>}
  
  </h1>
  {display}
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
