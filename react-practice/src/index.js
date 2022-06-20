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

const bowls = {
  "Mangowood" : "20.00",
  "Alibaster" : "10.00"
};

function Financial() {
  const [balance, setBalance] = useState();
  const [credit, setCredit] = useState();

  const creditLimit = () => {
    let aClass = 2000;
    let bClass = 1000;
    let cClass = 1100;
    let dClass = 4000;
    
  }
  const creditCheck = () => {
    if (balance >= 0) {
      return true;
    } else {
      return false;
    }
  };

};

function OrderEnter() {
const[order, setOrder] = useState('');
const [ordersList, setOrdersList] = useState([]);

const inputOrder = () => {
   setOrdersList([...ordersList, " " + order]);
};

return(
  <div>
    <input type='text'onChange={e => setOrder(e.target.value)}></input>
    <br></br>
    <button type='text' onClick={inputOrder}>Add Order To Make</button>
    <br></br>
    <h1>{ordersList}</h1>
  </div>
)
};

function InputCustomer() {
const [name, setName] = useState('');
const [customerList, setCustomerList] = useState([]);
const [customerNumber, setCustomerNumber] = useState();
const [activeOrInactive, setActiveOrInactive] = useState(true)
const addCustomer = () => {
  setCustomerList([...customerList, name])
};

const addToDatabase = () => {
  return 1;
};

const keepOrRemove = () => {

};

return(<div>
  <input type='text'onChange={e => setName(e.target.value)}></input>
  <br></br>
  <button type='text'>Add Customer</button>
</div>)
};

function InputOrder() {
  const [item, setItem] = useState('');

  return(<div>
    <input type='text'></input>
  </div>)
};


ReactDOM.render(
  <React.StrictMode>
  <OrderEnter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
