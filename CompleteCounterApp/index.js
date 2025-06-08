let count = 0;
function increment() {
  count++;
  document.getElementById("counter-lbl").textContent = count;
}

function save() {
  let finalValue = document.getElementById("counter-lbl").textContent;
  let paraValue = document.getElementById("save-para").textContent;

  paraValue = paraValue + finalValue + " - ";
  document.getElementById("save-para").textContent = paraValue;
  count = 0;
  document.getElementById("counter-lbl").textContent = count;
}
