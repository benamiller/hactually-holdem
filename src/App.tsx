import { useEffect, useState } from 'react';
import './App.css';
import './Components/Player';
import Player from './Components/Player';
import LobbyConfig from './Components/LobbyConfig';

const App = () => {
  const [isInGame, setIsInGame] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState('Ben');
  const [playerNames, setPlayerNames] = useState<string[]>(['Wig', 'Nico', 'Ben']);
  const [startingAmount, setStartingAmount] = useState(2000);
  const handleClick = () => {
    setIsInGame(!isInGame);
  }

  // Should set to next player in players array
  const finishTurn = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    setCurrentPlayerTurn(playerNames[currentPlayerIndex]);
    console.log(currentPlayerIndex);
  }

  const handleCheck = () => {
    console.log('Check');
    finishTurn();
  }

  const handleRaise = () => {
    console.log('Raise');
    finishTurn();
  }

  const handleFold = () => {
    console.log('Fold');
    finishTurn();
  }

  const players = playerNames.map((player) => {
    return <Player 
              name={player}
              money={startingAmount}
              bet={0}
              turn={currentPlayerTurn}
              handleCheck={handleCheck}
              handleRaise={handleRaise}
              handleBet={handleFold}/>
  });

  return (
    <main>
      <h1>Hactually Hold'em</h1>
      <section className='lobby-configuration'>
        <LobbyConfig setup={!isInGame} handleClick={handleClick}/>
      </section>
      <section className='players-container'>
        {players}
      </section>
    </main>
  );
}

export default App;