import './styles/App.css';
import React, { useState, useEffect } from 'react';

//components
import Cards from './components/Cards';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function updateScore() {
    setScore(score + 1);
  };

  function resetScore() {
    setScore(0);
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score])

  const body = {
    background: '#e3e3e3',
    padding: '10px'
  }

  //oops

  return (
    <div style={body} className="App">
      <header>
        <h1>Memory Card Game</h1>
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </header>

      <div className="game">
        <Cards score={updateScore} resetScore={resetScore} />
      </div>
    </div>
  );
}

export default App;
