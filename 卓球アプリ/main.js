"use strict";

let baka2, baka;
let n;

function addCount() {
  n++;
  counter.innerHTML = n;
}

window.addEventListener("click", () => {
  // 起動時の処理
  counter = document.getElementById("baka2");
  btnAdd = document.getElementById("baka");
  n = 0;

  btnAdd.addEventListener("click", addCount);
});
