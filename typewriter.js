"use strict";
//Variables
let char;
let string;
let maxChar;

const text = document.getElementsByClassName("typewritten")[0];

//load page
document.addEventListener("DOMContentLoaded", makeVariable());

//make h1 variable
function makeVariable() {
  string = text.textContent.toString();
  console.log(string);
  text.textContent = "";
  maxChar = string.length;

  char = maxChar;
  loop();
}
//remove/hide h1 content

//char variable

//loop
function loop() {
  console.log("here");

  if (char <= maxChar && char >= 1) {
    let typewritten;
    typewritten = string[maxChar - char];
    text.textContent += typewritten;
    text.classList.add("typewritten");

    char--;
    console.log(char);
  }
}

//end
