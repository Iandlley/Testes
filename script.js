"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let newHighScore = 0;

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (document.querySelector(".guess").value == secretNumber) {
    document.querySelector(".message").textContent = "Right Number!";
    document.querySelector(".body").style.background = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    newHighScore = score;

    if (newHighScore > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  }
});
