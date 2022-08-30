"use strict";
//Variables
let char;
let string;
let maxChar;

const text = document.getElementsByClassName("typewritten")[0];

//load page
document.addEventListener("DOMContentLoaded", start());

//make h1 variable
function start() {
  string = text.textContent.toString();
  //   console.log(string);
  text.textContent = "";
  maxChar = string.length;

  char = maxChar;
  loop();
}
//remove/hide h1 content

//char variable

//loop
function loop() {
  //   console.log("here");
  if (char <= maxChar && char >= 1) {
    let typewritten;
    typewritten = string[maxChar - char];
    text.textContent += typewritten;
    text.classList.add("typewritten");

    char--;
    // console.log(char);
    if (typewritten === "e" || typewritten === "s" || typewritten === "t") {
      setTimeout(loop, 150);
    } else if (
      typewritten === "i" ||
      typewritten === "h" ||
      typewritten === "e"
    ) {
      setTimeout(loop, 250);
    } else {
      setTimeout(loop, 190);
    }
  } else {
    start();
  }
}

//end
