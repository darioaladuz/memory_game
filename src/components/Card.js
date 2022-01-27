import React, { useState } from 'react';

export default function Card( { resetScore, score, reset, img, name, shuffle, card } ) {

    const [thisCard, setThisCard] = useState(card);

    // effects for when we click a card

    function updateCard() {
        // shuffle cards before checking if it was already clicked
        shuffle();
        if (!card.clicked) {
            const newCard = card;
            newCard.clicked = true;
            setThisCard({...newCard});
            score();
        } else {
            reset();
            resetScore();
        }
    }

    return (
        <div className="card" onClick={updateCard}>
            <div className="img-container" style={{backgroundImage: `url(${img})`}}>
                
            </div>
            <div className="card__name">
                {name}
            </div>
        </div>
    )
}