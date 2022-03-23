import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function GetInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.hatchways.io/assessment/students',
      );
      const json = await res.json();
      setData(json.hits);
    };
    fetchData();
  }, [setData]);

  return(<div>
    <ul>{data}</ul>
    </div>
  );
};


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
