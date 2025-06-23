let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

/*function sortFruits() {
  for (i in fruit) {
    if (i === "🍎") {
      appleShelf.innerText += i + " ";
    } else if (i === "🍊") {
      orangeShelf.innerText += i + " ";
    }
  }
}*/

function sortFruits() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.innerHTML += fruit[i] + " ";
      console.log("Apple found: " + fruit[i]);
    } else if (fruit[i] === "🍊") {
      orangeShelf.innerHTML += fruit[i] + " ";
    }
  }
}

sortFruits();
