import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

function PersonalityTest() {
  const [personality, setPersonality] = useState('');
  const [extrovert, setExtrovert] = useState(0);
  const [sensing, setSensing] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [perceiving, setPerceiving] = useState(0);

  return(<div>

    <h3>Do you get energized by social events or would you prefer to be alone?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Are you more of a talker than a listener?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you love attention?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you live more for the moment or focus on the future?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you prefer to play now and work later?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you like be spontaneous rather than have a planned schedule?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you lack empathy?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you follow your head more than your heart?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you prefer your kids to be smart than kind ?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you like having a set daily routine?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Are you able to focus on tasks for long periods of time?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

    <h3>Do you resist temptation easily?</h3>
    <button type="button">Yes</button>
    <button type="button">No</button>

  </div>)
};

function InputPractice() {
  const [answer, setAnswer] = useState('');
  const [practice, setPractice] = useState([]);
  


  const addInputs = () => {
    setPractice(practices => [...practices, answer +  ", "]);
  }
  return(
    <div>
       <input type="text" onChange={e => setAnswer(e.target.value)} />
       <button type="button" onClick={addInputs}>Click Me</button>
       <h1>{practice}</h1>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
  <PersonalityTest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
