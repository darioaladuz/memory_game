import React, { useEffect, useState } from 'react';
import Card from './Card';
import { characters } from './Characters';
  
export default function Cards({ score, resetScore }) {

    const [cards, setCards] = useState([...characters]);

    function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        return array;
    }

    function shuffleCards() {
        const shuffledCards = shuffleArray(cards);
        setCards([...shuffledCards]);
    }  

    function resetCards() {
        characters.forEach(character => {
            character.clicked = false;
        })
    }

    useEffect(() => {
        shuffleCards();
        console.log(cards);
    }, [])

    return (
        <div className="cards">
            {
                cards.map(character => {
                    return <Card resetScore={resetScore} score={score} reset={resetCards} card={character} clicked={character.clicked} cards={cards} shuffle={shuffleCards} key={Math.random()} img={character.img} name={character.name} />
                })
            }
        </div>
    )
}