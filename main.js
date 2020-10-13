'use strict';

const insert = document.querySelector(".js-insert");
const tryButton = document.querySelector(".js-tryButton");
const clueText = document.querySelector(".js-clue");
const tries = document.querySelector(".js-tries");
const maxNumber = 100;
const randomNumber = getRandomNumber(maxNumber);
let triesN = 0;

tryButton.addEventListener("click", selectedNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log("El número aleatorio generado es: " + randomNumber);

function selectedNumber() {
  console.log("El número introducido es: " + insert.value);
  if (insert.value < 1 || insert.value > 100) {
    clueText.innerHTML = "El número debe estar entre 1 y 100";
  } else if (insert.value > randomNumber) {
    clueText.innerHTML = "Demasiado alto";
  } else if (insert.value < randomNumber) {
    clueText.innerHTML = "Demasiado bajo";
  } else if (insert.value == randomNumber) {
    clueText.innerHTML = "Has ganado campeona!!!";
    tryButton.disabled = true;
  }
  tryNumbers();
}

function tryNumbers() {
  triesN += 1;
  tries.innerHTML = "Número de intentos: " + triesN;

}