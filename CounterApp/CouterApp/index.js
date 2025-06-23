//document.getElementById("count-el").innerText = 5;

// let lapsCompleted = 0;

// function inc() {
//   lapsCompleted++;
//   console.log(lapsCompleted);
// }

// inc();
// inc();
// inc();

//initialize the count as 0
//listens for clicks in incremet button
//increment the count variable when the button is clicked
//change the count-el in the html to reflect the new count
let count = 0;

function increment() {
  count++;
  document.getElementById("count-el").textContent = count;
}

let finalStr = document.getElementById("save-el").innerText;
function save() {
  finalStr = finalStr + document.getElementById("count-el").textContent + " - ";
  document.getElementById("save-el").textContent = finalStr;

  count = 0;
  document.getElementById("count-el").innerText = count;
}
