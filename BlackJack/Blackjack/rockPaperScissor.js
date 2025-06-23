let hands = ["rock", "paper", "scissors"];

function rockPaperScissors() {
  let num = Math.ceil(Math.random() * 3);
  console.log(num);
  let hand = hands[num - 1];
  console.log("You chose: " + hand);
}

rockPaperScissors();
