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

  const handleClick = () => {
    setCalcNum(prevCount => prevCount +1)
    numArray.push(calcNum)
  };
  const handleClick2 = () => {
    setCalcNum(prevCount => prevCount +2)
    numArray.push(calcNum)
  };
  const handleClick3 = () => {
    setCalcNum(prevCount => prevCount +3)
    numArray.push(calcNum)
  };
  const handleClickClear = () => {
    setCalcNum(0)
  };
 
  let numArray = [];


  return (
    <div>
      <button type="button" onClick={handleClick}>1</button>
      <button type="button" onClick={handleClick2}>2</button>
      <button type="button" onClick={handleClick3}>3</button>
      <button type="button" onClick={handleClickClear}>Clear</button>

<br></br>
      {numButtons()}
      <h1>{calcNum}</h1>
      
    </div>
  )
};


export default App;
