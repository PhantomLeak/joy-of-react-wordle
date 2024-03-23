import React from "react";


function Banner({gameStatus, numberOfGuesses, answer}) {
    return (
        <div className={gameStatus === 'won' ? 'happy banner' : 'sad banner'}>
        {gameStatus == 'won' ? 
        <p>
            <strong>Congratulations!</strong> You got it in <strong>{numberOfGuesses} guesses!</strong>
        </p>
        : 
        <p>Sorry, the correct answer is <strong>{answer}</strong></p>
        }
    </div>
    )
}

export default Banner;