import { useEffect, useState } from 'react';
import './App.css';
import './Components/Player';
import Player from './Components/Player';
import LobbyConfig from './Components/LobbyConfig';
import Cards from './Components/Cards';
import Deck from './Components/Deck';
import config from './cred';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = config;

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const App = () => {
  const [isInGame, setIsInGame] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState('Ben');
  const [playerNames, setPlayerNames] = useState([
    {name: 'Wig', avatar: 'https://i.imgur.com/9YsIJr1.jpegß'},
    {name: 'Nico', avatar: 'https://i.imgur.com/9YsIJr1.jpegß'},
    {name: 'Ben', avatar: 'https://lh3.googleusercontent.com/a-/AFdZucoRmoZsPGfdtKV-aFAgAVOl-Y4bmJPql73ywWWnBqQ=s96-c'}
  ]);
  const [startingAmount, setStartingAmount] = useState(2000);
  const [playerIndex, setPlayerIndex] = useState('');
  const [userPhoto, setUserPhoto] = useState('');

  useEffect(() => {
    const indexRef = ref(database, 'lobby/' + '87ue8g' + '/currentPlayerIndex');
    onValue(indexRef, (snapshot) => {
      const data = snapshot.val();
      setPlayerIndex(data);
    });
  }, []);
  
  const handleClick = () => {
    setIsInGame(!isInGame);
  }

  const signInUser = () => {
    console.log('Signing in');
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log(user);
      setUserPhoto(user.photoURL || '');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  const signOutUser = () => {
    console.log('Signing out');
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      console.log('Sign out successful');
    }).catch((error) => {
      console.log(error);
    });
  }

  // Should set to next player in players array
  const finishTurn = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    setCurrentPlayerTurn(playerNames[currentPlayerIndex]['name']);
    set(ref(database, 'lobby/87ue8g/currentPlayerIndex'), {
      index: currentPlayerIndex
    });
    console.log(`Server: ${currentPlayerIndex}`);
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
              key={player.name} 
              name={player.name}
              money={startingAmount}
              bet={0}
              turn={currentPlayerTurn}
              handleCheck={handleCheck}
              handleRaise={handleRaise}
              handleBet={handleFold}
              avatar={player.avatar} />
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
      <section className='cards-container'>
        <Cards numbers={[2, 6]}/>
      </section>
      <section className='card-deck-container'>
        <Deck />
      </section>
    </main>
  );
}

export default App;
