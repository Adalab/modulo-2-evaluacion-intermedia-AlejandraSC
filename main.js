'use strict';

const insert = document.querySelector(".js-insert");
const tryButton = document.querySelector(".js-tryButton");
const clueText = document.querySelector(".js-clue");
const tries = document.querySelector(".js-tries");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


tryButton.addEventListener("click", selectedNumber)

function selectedNumber() {
  console.log(insert.value)
  const randomNumber = getRandomNumber(100);
  console.log(randomNumber)
  if (insert.value < 1 || insert.value > 100) {
    clueText.innerHTML = "El número debe estar entre 1 y 100";
  } else if (insert.value > randomNumber) {
    clueText.innerHTML = "Demasiado alto";
  } else if (insert.value < randomNumber) {
    clueText.innerHTML = "Demasiado bajo";
  } else if (insert.value == randomNumber) {
    clueText.innerHTML = "Has ganado campeona!!!";
  }
}