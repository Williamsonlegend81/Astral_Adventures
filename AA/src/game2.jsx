
import React, { useEffect } from 'react';
import './game2.css'


const game2 = () => {
  useEffect(()=>{
    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchCount = 0; // Track the number of matched pairs
    
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
    
      this.classList.add('flip');
    
      if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    
        return;
      }
    
      // second click
      secondCard = this;
    
      checkForMatch();
    }
    
    function checkForMatch() {
      let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
      isMatch ? disableCards() : unflipCards();
    }
    
    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    
      matchCount++; // Increment the match count
    
      if (matchCount === cards.length / 2) {
        setTimeout(resetGame, 1000); // Reset the game after all pairs are matched
      }
    
      resetBoard();
    }
    
    function unflipCards() {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    
        resetBoard();
      }, 1500);
    }
    
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
    
    function resetGame() {
      matchCount = 0; // Reset match count
      cards.forEach(card => card.classList.remove('flip')); // Flip all cards back
    
      setTimeout(shuffle(), 500); // Shuffle the cards after a short delay
    
      cards.forEach(card => card.addEventListener('click', flipCard)); // Re-enable card flipping
    }
    
    function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    };
    
    cards.forEach(card => card.addEventListener('click', flipCard));
    
  },[])
  return (
    <div className={"body2"}>
      <section className="memory-game">
    <div className="memory-card" data-framework="halley'sComet">
      <img className="front-face1" src="../public/Constitutes/halley'scomet.jpg" alt="Halley's Comet" />
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
      
    </div>
    <div className="memory-card" data-framework="halley'sComet">
        <h4 className="front-face1">I visit Earth every 76 years, shining bright,
          Named after an astronomer, who am I in the night?</h4>
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="se">
      <img className="front-face1" src="../public/Constitutes/solareclipse.jpg" alt="Solar Eclipse"/> 
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="se">
        <h4 className="front-face1">During the day,I make the Sun go dim,
          As the Moon hides its light, it’s a sight on a whim. What am I?</h4>
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="chandra">
      <img className="front-face1" src="../public/Constitutes/chandrayan.jpg" alt="Chandrayaan 3" />
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="chandra">
       <h4 className="front-face1">Sent by India to the Moon’s terrain,
        I’m on a quest to explore and gain. What am I?</h4>
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="om">
      <img className="front-face1" src="../public/Constitutes/olympusmons.jpg" alt="Olympus Mons" />
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="om">
        <h4 className="front-face1">I’m the tallest volcano in the solar system’s view,
          On Mars I stand, with a peak that’s huge. What am I?</h4>
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="galaxy">
      <img className="front-face1" src="../public/Constitutes/andromeda.jpg" alt="Andromeda" />
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="galaxy">
        <h4 className="front-face1">I’m a galaxy that’s close but far from our home,
          Named after a princess, I’m where stars freely roam. What am I?</h4>
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="Milky way">
      <img className="front-face1" src="../public/Constitutes/milkyway.jpg" alt="Milky way" />
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="Milky way">
        <h4 className="front-face1">I’m a galaxy seen as a bright, banded swirl,
          Where Earth and our solar system twirl. What am I?</h4>
      <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
    </div>
  </section>
    </div>
  )
}

export default game2
