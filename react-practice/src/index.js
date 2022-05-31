import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals'; 

const customers = {
  '83819':'Steele Angel',
  '67001':"Rooster's Nest"
};

const glasses = {
  'Aperitivo': '12.00',
  'Bandol': '11:00'
};

function OrderEnter() {

};

function InputCustomer() {
const [name, setName] = useState('');



};

function InputOrder() {
  const [item, setItem] = useState('');

  return(<div>
    <input type='text'></input>
  </div>)
};


ReactDOM.render(
  <React.StrictMode>
  <InputOrder />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
