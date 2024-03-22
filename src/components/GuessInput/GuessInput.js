
import React from 'react';

function GuessInput({handleUserGuess}) {
    const [userGuess, setUserGuess] = React.useState('');

  function handleGuess(event) {
    event.preventDefault();
    
    handleUserGuess(userGuess);

    setUserGuess('');
  }

  return (
    <form onSubmit={handleGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={userGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setUserGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;