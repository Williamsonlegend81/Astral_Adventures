import React, { useEffect } from 'react';

import './game4.css'


const game4 = () => {

useEffect(()=>{
    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchCount = 0; // Track the number of matched pairs
    
    setTimeout(shuffle(), 500);
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
    // (function shuffle() {
    //   cards.forEach(card => {
    //     let randomPos = Math.floor(Math.random() * 12);
    //     card.style.order = randomPos;
    //   });
    // });
    
    cards.forEach(card => card.addEventListener('click', flipCard));
    
},[]);




  return (
    <div className={"body4"}>
      
      <section className="memory-game">
    <div className="memory-card" data-framework="orion">
      <img className="front-face" src="../public/Constitutes/orion.jpg" alt="ORION"  />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
      
    </div>
    <div className="memory-card" data-framework="orion">
        <h4 className="front-face"> Orion
            (Mrugashirsh)</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="Big Dipper">
      <img className="front-face" src="../public/Constitutes/bigdipper.jpg" alt="BIG DIPPER"/> 
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="Big Dipper">
        <h4 className="front-face">BIG DIPPER (SAPTARSHI)</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="Scorpion">
      <img className="front-face" src="../public/Constitutes/scorpio.png" alt="SCORPION" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="Scorpion">
       <h4 className="front-face">SCORPIO 
        (Vrushchik)</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="Leo">
      <img className="front-face" src="../public/Constitutes/leo.jpg" alt="LEO" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="Leo">
        <h4 className="front-face">LEO (SINH)</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="Pisces">
      <img className="front-face" src="../public/Constitutes/pisces.jpeg" alt="PISCES" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="Pisces">
        <h4 className="front-face">PISCES
            (MEEN)</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>

    <div className="memory-card" data-framework="Canis major">
      <img className="front-face" src="../public/Constitutes/canismjor.png" alt="CANIS MAJOR" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>
    <div className="memory-card" data-framework="Canis major">
        <h4 className="front-face"> CANIS MAJOR
            (SHWAN)</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back_of_card" />
    </div>
  </section>

  </div>
  )
}

export default game4