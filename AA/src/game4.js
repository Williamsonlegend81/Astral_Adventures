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