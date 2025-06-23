let firstCard = 19;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
  console.log("Do you want to draw a new card");
} else if (sum === 21) {
  console.log("Wohoo! You got blackjack");
  hasBlackJack = true;
} else {
  console.log("You are out of game");
  isAlive = false;
}

console.log(hasBlackJack);
