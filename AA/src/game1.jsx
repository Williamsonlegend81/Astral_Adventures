import React, { useEffect } from 'react';
import './game1.css'

const game1 = () => {

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
    
      setTimeout(shuffle, 500); // Shuffle the cards after a short delay
    
      cards.forEach(card => card.addEventListener('click', flipCard)); // Re-enable card flipping
    }
    
    (function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    })();
    
    cards.forEach(card => card.addEventListener('click', flipCard));
    
  },[])
  return (
    <div className='body1'>
      <section className="memory-game">
    <div className="memory-card" data-framework="apj">
      <img className="front-face" src="Scientists/A._P._J._Abdul_Kalam.jpg" alt="APJ Abdul Kalam" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
    <div className="memory-card" data-framework="apj">
      <h4 className = "front-face">Dr. APJ Abdul Kalam</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>

    <div className="memory-card" data-framework="jc">
      <img className="front-face" src="Scientists/JC_Bose.jpg" alt="J C Bose" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
    <div className="memory-card" data-framework="jc">
    <h4 className = "front-face">J C Bose</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>

    <div className="memory-card" data-framework="cv">
      <img className="front-face" src="Scientists/cv_raman.jpg" alt="Angular" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
    <div className="memory-card" data-framework="cv">
    <h4 className = "front-face">C V Raman</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>

    <div className="memory-card" data-framework="homi">
      <img className="front-face" src="Scientists/Homi_bhabha.jpg" alt="Homi J Bhabha" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
    <div className="memory-card" data-framework="homi">
    <h4 className = "front-face">Homi J Bhabha</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>

    <div className="memory-card" data-framework="kalpana">
      <img className="front-face" src="Scientists/Kalpana_chavla.jpg" alt="Kalpana Chawla" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
    <div className="memory-card" data-framework="kalpana">
    <h4 className = "front-face">Kalpana Chawla</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>

    <div className="memory-card" data-framework="rakesh">
      <img className="front-face" src="Scientists/Rakesh_sharma_edit.jpg" alt="Rakesh Sharma" />
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
    <div className="memory-card" data-framework="rakesh">
    <h4 className = "front-face">Rakesh Sharma</h4>
      <img className="back-face" src="Scientists/Back.jpg" alt="Back" />
    </div>
  </section>
    </div>
  )
}

export default game1
