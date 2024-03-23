import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleUserGuess(userGuesses) {
    const totalGuesses = [...guesses, userGuesses];
    setGuesses(totalGuesses);

    if (userGuesses.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (totalGuesses >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
    console.log(gameStatus);
  }

  return <>
  <PreviousGuesses guesses={guesses} answer={answer} />
  <GuessInput gameStatus={gameStatus} handleUserGuess={handleUserGuess}/>
  {gameStatus !== 'running' && <Banner gameStatus={gameStatus} numberOfGuesses={guesses.length} answer={answer} />}
  </>;
}

export default Game;
