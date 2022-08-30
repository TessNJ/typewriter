"use strict";
//load page
//make h1 variable
let string = document.getElementById("typewriter").textContent;
//remove h1 content
document.getElementById("typewriter").textContent = "";
console.log(string);
let counter = string.length;

function loop() {
  if (counter > 0) {
    counter += 1;
    setTimeout(loop, 1000);
  }
}

//end
