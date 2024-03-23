
import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessValue({letter, guessStatus}) {
    const className = guessStatus ? `cell ${guessStatus}` : 'cell';

    return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  guessCheckValue = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <GuessValue
            key={num}
            letter={guessCheckValue ? guessCheckValue[num].letter : undefined}
            guessStatus={guessCheckValue ? guessCheckValue[num].status : undefined} />
      ))}
    </p>
  );
}

export default Guess;