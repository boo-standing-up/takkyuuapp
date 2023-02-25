"use script";

let baka2, baka;
let n;

function addCount() {
  n++;
  counter.innerHTML = n;
}

window.addEventListener("click", () => {
  counter = document.getElementById("baka2");
  btnAdd = document.getElementById("baka");
  n = 0;

  btnAdd.addEventListener("click", addCount);
});
