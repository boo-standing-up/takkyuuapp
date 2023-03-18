"use script";

let　disp_count, btn_reset;
let n;

function addCount(){
    n++;
    disp_count.innerHTML = n;
}

window.addEventListener("load", ()=>{
    
    disp_count = document.getElementById("disp_count");
    btn_reset = document.getElementById("btn_reset");
    n = 0;

    btn_reset.addEventListener("click", addCount);
});