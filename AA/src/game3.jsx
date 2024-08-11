import React, { useEffect } from 'react';
import './game3.css';

const Game3 = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchCount = 0; // Track the number of matched pairs

    // Shuffle cards after a short delay
    setTimeout(shuffle, 500);

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

    function shuffle() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
    }

    cards.forEach(card => card.addEventListener('click', flipCard));

    // Cleanup the event listeners on component unmount
    return () => {
      cards.forEach(card => card.removeEventListener('click', flipCard));
    };
  }, []);

  return (
    <div className="body3">
      <section className="memory-game">
        <div className="memory-card" data-framework="ISRO">
          <img className="front-face" src="../public/Agencylogo/isro.png" alt="ISRO" />
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
        <div className="memory-card" data-framework="ISRO">
          <h4 className="front-face">ISRO INDIA</h4>
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>

        <div className="memory-card" data-framework="roscosmos">
          <img className="front-face" src="../public/Agencylogo/roscosmos.png" alt="ROSCOSMOS" />
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
        <div className="memory-card" data-framework="roscosmos">
          <h4 className="front-face">ROSCOSMOS RUSSIA</h4>
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>

        <div className="memory-card" data-framework="NASA">
          <img className="front-face" src="../public/Agencylogo/nasa.png" alt="NASA" />
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
        <div className="memory-card" data-framework="NASA">
          <h4 className="front-face">NASA USA</h4>
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>

        <div className="memory-card" data-framework="europe">
          <img className="front-face" src="../public/Agencylogo/esa.png" alt="European space agency" />
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
        <div className="memory-card" data-framework="europe">
          <h4 className="front-face">EUROPEAN SPACE AGENCY</h4>
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>

        <div className="memory-card" data-framework="japan">
          <img className="front-face" src="../public/Agencylogo/jaxa.png" alt="JAPANESE SPACE AGENCY" />
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
        <div className="memory-card" data-framework="japan">
          <h4 className="front-face">JAXA JAPAN</h4>
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>

        <div className="memory-card" data-framework="china">
          <img className="front-face" src="../public/Agencylogo/cnsa.png" alt="CHINESE SPACE AGENCY" />
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
        <div className="memory-card" data-framework="china">
          <h4 className="front-face">CNSA CHINA</h4>
          <img className="back-face" src="../Scientists/Back.jpg" alt="Back_of_card" />
        </div>
      </section>
    </div>
  );
}

export default Game3;
