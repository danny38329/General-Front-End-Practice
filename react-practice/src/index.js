import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function GetInfo() {
  

    useEffect(() => {
      const [status, setStatus] = useState('idle');
      const [query, setQuery] = useState('');
      const [data, setData] = useState([]);
      
      useEffect(() => {
          if (!query) return;
      
          const fetchData = async () => {
              setStatus('fetching');
              const response = await fetch(
                'https://api.hatchways.io/assessment/students'
              );
              const data = await response.json();
              setData(data.hits);
              setStatus('fetched');
          };
      
          fetchData();
      }, [query]);
  

    return(
        <div>
            <h1>{data}</h1>   
        </div>
    );
}


ReactDOM.render(
  <React.StrictMode>
  <GetInfo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
