let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * fighters.length);
  let num2 = Math.floor(Math.random() * fighters.length);

  let fighter1 = fighters[num1];
  let fighter2 = fighters[num2];

  console.log(fighter1 + " vs " + fighter2);
  stageEl.innerHTML = fighter1 + " vs " + fighter2;
});
