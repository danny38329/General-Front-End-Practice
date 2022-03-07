import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ExtrovertOrIntrovert() {
  const [personality, setPersonality] = useState("");

  const extrovert = () => {
    setPersonality("extrovert");
  }

  const introvert = () => {
    setPersonality("introvert");
  }

  return (
    <div>
      <h1>What is your personality?</h1>
      <button onClick={extrovert}>Extrovert</button>
      <button onClick={introvert}>Introvert</button>
      <h1>{personality}</h1>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <ExtrovertOrIntrovert />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
