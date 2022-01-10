import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [pic, setPic] = useState('');

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let chosenPic;

    if (randomNumber === 1) {
      chosenPic = 'https://i2-prod.mirror.co.uk/incoming/article22123981.ece/ALTERNATES/s615b/1_Mike-Tyson-versus-Evander-Holyfield.jpg';
    } else if (randomNumber === 2) {
      chosenPic = 'https://i1.sndcdn.com/artworks-000585482786-7cozwy-t500x500.jpg';
    } else {
      chosenPic = 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210202095047-tom-brady.jpg';
    }

    setPic(chosenPic);
  };


  return (
    <div>
      <h1>Image 1</h1>
      <button type='button' onClick={handleClick}>Click Me</button>
      <button type="button" onClick={()=> setPic('')}>Click Now</button>
      <img src={pic}></img>

    </div>
  )
};

export default App;
