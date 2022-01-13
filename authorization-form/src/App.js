import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [calcNum, setCalcNum] = useState(0);

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
    <div>
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
      </div>

      <h1>{calcNum}</h1>
      
    </div>
  )
};


export default App;
