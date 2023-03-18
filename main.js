"use script";

window.onload = function() {
     let count_disp = document.getElementById("count");  
     let count_up_btn = document.getElementById("count_up");
     let reset_btn = document.getElementById("reset");
     let count_value = 0;

     count_up_btn.onclick = function () {
     count_value += 1;
     count_disp.innerHTML = count_value;
     }

     reset_btn.onclick = function () {
          count_value = 0; count_disp.innerHTML = count_value;
     }
};