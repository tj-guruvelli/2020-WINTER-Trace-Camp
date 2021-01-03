import { useState } from "react";

import Game from "../components/Gameboard";
import MainMenu from "../components/MainMenu";

let clickedCard = null;
let preventClick = false;
let combosFound = 0;



const Home = () => {
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
  };

  const gameover = (score) => {
    if (score > highscore) {
      setHighscore(score);
    }
    setPlaying(false);
  


  // Removes the hidden color when the card is clicked
  function onCardClicked(event) {
  const target = event.currentTarget;
  if (
  // Prevents the user from clicking another card before the program decides if the two cards flipped over match 
  preventClick ||  
  // can't click cards if the clicked card matches the target card 
  target === clickedCard || 
  // can't click cards if they are already matching
  target.className.includes('done')){
  return;
}


  console.log(target.className);
  target.className = target.className
    .replace('color-hidden','')
    target.className += ' done';

    console.log(target.getAttribute('data-color'))

    //If we haven't clicked a card, keep track of the card, display it's color
    if (!clickedCard) {
        clickedCard = target
    } 
    else if (clickedCard) {
      //If we have already clicked a card, check if the new card matches the old card color
      preventClick = true;
      if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')
      ) 
      { 
        console.log('cards are not equal')
        preventClick = true;
        setTimeout (() => {
          clickedCard.className = clickedCard.className.replace('done', '') +
          ' color-hidden';
          target.className = target.className.replace('done', '') +
          ' color-hidden';
          // Resets the tracking if the card is clicked back to normal in order to track again
          clickedCard = null;
          // During the 500 milisecond wait, the program will prevent the user from clicking cards
          preventClick = false;
          
          }, 500);
        } 
        else {
        // Resets the tracking if the card is clicked back to normal
        clickedCard = null;
        // Everytime a combo is found it keeps track by acculmating 
        combosFound++
        if (combosFound === 8){
          alert('YOU WIN')
        }
        }

    }
  }

};

  return (
    <div className="flex flex-col flex-center justify-center h-screen">
      <div className="flex flex-col text-center items-center">
        
        
        {playing ? (
          <Game onGameover={gameover} />
        ) : (
          <MainMenu onStart={start} />
        )}
      </div>
    </div>
  );
};

export default Home;