import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [calcNum, setCalcNum] = useState(0);
  const [result, setResult] = useState('');

  const numButtons = () => {
    let digits = [];

    for (let i=1; i < 10; i++) {
      digits.push(
        <button
          key={i}>
            {i}
          </button>
      )
    }
    return digits;
  }

  
  const handleClickClear = () => {
    setCalcNum(0)
  };
 
  let numArray = [];


  return (
    <div className="calculator">
      <div className="display">
      0
      </div>
      <div className="elements">
      <button>+</button>
      <button>-</button>
      <button>/</button>
      <button>*</button>
      <button type="button" onClick={handleClickClear}>Clear</button>
      </div>
<br></br>
      <div className="digits">
      {numButtons()}
      
      <button>.</button>
      <button>=</button>
      </div>

      <h1></h1>
      
    </div>
  )
};


export default App;
