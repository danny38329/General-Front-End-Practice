import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals'; 

function AddMinusCalculator() {
  const [current, setCurrent] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState();

  const addMe = () => {
    setSymbol('+');
  };

  const subtractMe = () => {
    setSymbol('-');
  };

  const buttonOne = () => {
    if (first === 0) {
      setFirst(1);
    } else {
      setSecond(1)
    }
  }
 
  return(<div>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">+</button>
    <button type="button">-</button>
    <button type="button">=</button>

  </div>)
};

function ZodaxShop() {
  const [category, setCategory] = useState('');

const diffusers = {
  casablanca: 35,
  dream: 43,
  modena: 100
};

const candles = {
  apothecary: 50,
  illuminaria: 75,
  paloma: 20
}

const glasses = {
  aperitivo: 15,
  fez : 10,
  bandol: 5
};

const glassesButton = () => {
  setCategory('glasses');
};

const diffusersButton = () => {
  setCategory('diffusers');
};

const candlesButton = () => {
  setCategory('candles');
};

const glassDisplay = <div>
  <h1>Aperitivo : ${glasses.aperitivo}</h1>
  <h1>Fez : ${glasses.fez}</h1>
  <h1>Bandol : ${glasses.bandol}</h1>
</div>

return(
  <div>
    <button type='button' onClick={glassesButton}>Glasses</button>
    <button type='button'>Diffusers</button>
    <button type='button'>Candles</button>
    <br>
    </br>
  <h1>{category === 'glasses'? glassDisplay: ""}</h1>

  </div>
);


};

const App = () => {
  const defaultList = [
    { name: "ItemOne" },
    { name: "ItemTwo" },
    { name: "ItemThree" }
  ];

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
   const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
  };

  return (
    <div>
      {list.map(item => {
        return (
          <>
            <span name={item.name} onClick={handleRemoveItem}>
              x
            </span>
            <span>{item.name}</span>
          </>
        );
      })}
    </div>
  );
};






function ToDoList() {

  
  const [note, setNote] = useState('');
  const [addInput, setAddInput] = useState([]);
  const [count, setCount] = useState(-1);

  const removalButton = () => {
    const extraInput = [...addInput]; 

    setAddInput(extraInput.splice(count,1));
    setCount(count -1); 
  };
  
  const addNote = () => {
    setAddInput(addInputs => [...addInputs, <div>{note}<button type="button" onClick={removalButton}>Remove</button></div>])
  }

  return(<div>
    <input type="text" onChange={e => setNote(e.target.value)}/>
    <button type="button" onClick={addNote}>Add Note</button>
    <h1>{addInput}</h1>
    
  </div>)
};


function MusicPlaylist() {
  const [songAddition, setSongAddition] = useState('');
  const [song, setSong] = useState('test');

  const songList = {
   "1" : "L'Amour Toujours",
   "2" : "Summer",
   "3" : "Daddy DJ",
   "4" : "Sea"
  };

  const inputSong = () => {
    
  }
 
  const randomNumber = () => {
    let chosenNumber = Math.floor(Math.random() * 5);
    setSong(songList[chosenNumber]);
  }



  return(<div>

    <input type='text' onChange={e => setSongAddition(e.target.value)} />

    <button type="button">Add</button>

    <button type="button" onClick={randomNumber}>Shuffle</button>

    <h1>{song}</h1>


  </div>)
};



function BasketballStats() {

  const [player, setPlayer] = useState('');
  const [points, setPoints] = useState(0);
  const [rebounds, setRebounds] = useState(0);
  const [assists, setAssists] = useState(0);

  const bulls = {
    player: "Michael Jordan", 
    points: 35,
    rebounds : 6,
    assists: 6
  };

  const cavs = {
    player: "LeBron James", 
    points: 30,
    rebounds : 8,
    assists: 8
  };

  const lakers = {
    player: "Kareem Abdul Jabbar", 
    points: 30,
    rebounds : 4,
    assists: 12
  };

  return(<div>

    <input type="text" onChange={e => setPlayer(e.target.value)} />
    <button type="button">Player</button>

    <h1>{player === "Michael Jordan" ? <div> <h1>{bulls.player}</h1><h1>{bulls.points} </h1> </div>: ""}</h1>
  

  </div>)
};

function PersonalityTest() {
  const [personality, setPersonality] = useState('');
  const [extrovert, setExtrovert] = useState(0);
  const [sensing, setSensing] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [judging, setJudging] = useState(0);

  const addExtrovert = () => {
    setExtrovert(extrovert + 1);
  }

  const minusExtrovert = () => {
    setExtrovert(extrovert - 1);
  }

  const addSensing = () => {
    setSensing(sensing + 1);
  }

  const minusSensing = () => {
    setSensing(sensing - 1);
  }

  const addThinking = () => {
    setThinking(thinking + 1);
  }

  const minusThinking = () => {
    setThinking(thinking - 1);
  }

  const addJudging = () => {
    setJudging(judging + 1);
  }

  const minusJudging = () => {
    setJudging(judging - 1);
  }



  return(<div>

    <h3>Do you get energized by social events or would you prefer to be alone?</h3>
    <button type="button" onClick={addExtrovert}>Yes</button>
    <button type="button" onClick={minusExtrovert}>No</button>

    <h3>Are you more of a talker than a listener?</h3>
    <button type="button" onClick={addExtrovert}>Yes</button>
    <button type="button" onClick={minusExtrovert}>No</button>

    <h3>Do you love attention?</h3>
    <button type="button" onClick={addExtrovert}>Yes</button>
    <button type="button" onClick={minusExtrovert}>No</button>

    <h3>Do you live more for the moment or focus on the future?</h3>
    <button type="button" onClick={addSensing}>Yes</button>
    <button type="button" onClick={minusSensing}>No</button>

    <h3>Do you prefer to play now and work later?</h3>
    <button type="button" onClick={addSensing}>Yes</button>
    <button type="button" onClick={minusSensing}>No</button>

    <h3>Do you like be spontaneous rather than have a planned schedule?</h3>
    <button type="button" onClick={addSensing}>Yes</button>
    <button type="button" onClick={minusSensing}>No</button>

    <h3>Do you lack empathy?</h3>
    <button type="button" onClick={addThinking}>Yes</button>
    <button type="button" onClick={minusThinking}>No</button>

    <h3>Do you follow your head more than your heart?</h3>
    <button type="button" onClick={addThinking}>Yes</button>
    <button type="button" onClick={minusThinking}>No</button>

    <h3>Do you prefer your kids to be smart than kind ?</h3>
    <button type="button" onClick={addThinking}>Yes</button>
    <button type="button" onClick={minusThinking}>No</button>

    <h3>Do you like having a set daily routine?</h3>
    <button type="button" onClick={addJudging}>Yes</button>
    <button type="button" onClick={minusJudging}>No</button>

    <h3>Are you able to focus on tasks for long periods of time?</h3>
    <button type="button" onClick={addJudging}>Yes</button>
    <button type="button" onClick={minusJudging}>No</button>

    <h3>Do you resist temptation easily?</h3>
    <button type="button" onClick={addJudging}>Yes</button>
    <button type="button" onClick={minusJudging}>No</button>

    <h1>{extrovert > 0 ? "E" : "I"}</h1>
    <h1>{sensing > 0 ? "S" : "N"}</h1>
    <h1>{thinking > 0 ? "T" : "F"}</h1>
    <h1>{judging > 0 ? "J" : "P"}</h1>

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
  <ZodaxShop />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
