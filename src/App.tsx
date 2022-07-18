import { useState } from 'react';
import './App.css';
import './Components/Player';
import Player from './Components/Player';
import Betting from './Components/Betting';
import LobbyConfig from './Components/LobbyConfig';

const App = () => {
  const [isInGame, setIsInGame] = useState(false);
  const handleClick = () => {
    setIsInGame(!isInGame);
  }

  return (
    <main>
      <nav>Hello World</nav>
      <section className='lobby-configuration'>
        <LobbyConfig setup={!isInGame} handleClick={handleClick}/>
      </section>
      <section className='players-container'>
        <Player name='nico'/>
        <Player name='wig'/>
        <Player name='ben'/>
      </section>
      <section className='betting-container'>
        <Betting prevBet={false} />
      </section>
    </main>
  );
}

export default App;
