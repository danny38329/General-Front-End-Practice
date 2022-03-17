import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  return(
    <div>
      <button type='button' onClick={addCount}>Count ADD</button>
      <h1>{count}</h1>
    </div>
  )

}



ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
