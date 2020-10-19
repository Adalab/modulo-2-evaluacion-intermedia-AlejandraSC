'use strict';

const insert = document.querySelector('.js-insert');
const tryButton = document.querySelector('.js-tryButton');
const clueText = document.querySelector('.js-clue');
const tries = document.querySelector('.js-tries');
const playAgainBtn = document.querySelector('.js-playAgainButton');
let random = getRandomNumber(100);
let intentos = 0;

//Se crea una función que genere un número random y se le pide que lo muestre por consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log('El número de la suerte es ' + random);

//Se crea una función en la que según el número que haya elegido el participante, entrará en la condición que cumpla y a su vez entrará en la función paintFeedback. Se declara la constante userValue para evitar tanta repetición y se usa parseInt() para convertir el valor a número
function enterValue() {
  const userValue = parseInt(insert.value);
  console.log('El número que el concursante ha introducido es ' + userValue);
  if (userValue < 1 || userValue > 100) {
    paintFeedback('Solo es válido entre 1 y 100');
  } else if (userValue > random) {
    paintFeedback('Demasiado alto');
  } else if (userValue === random) {
    paintFeedback('Campeona, has ganado');
    playAgain();
  } else if (userValue < random) {
    paintFeedback('Demasiado bajo');
  }
  increaseNumber();
}

//Una vez jugada una partida, se resetea el juego y se genera un nuevo número
function reset() {
  playAgainBtn.hidden = true;
  tryButton.disabled = false;
  insert.value = '';
  intentos = 0;
  tries.innerHTML = 'Número de intentos ' + intentos;
  paintFeedback('Pista: Escribe el número y dale a Prueba');
  random = getRandomNumber(100);
  console.log('El número de la suerte es ' + random);
}

//Una vez el jugador acierta, se deshabilita el botón de prueba y se habilita el de volver a jugar
function playAgain() {
  playAgainBtn.hidden = false;
  tryButton.disabled = true;
}

//Se crea una función que recibe un texto, el cual va a ir pintando sustituyendo la parte que se ha traído del HTML
function paintFeedback(text) {
  clueText.innerHTML = text;
}

//Se crea una función que no recibe ningún parámetro, la cual una vez se entre en ella va a incrementar los intentos sumando 1 cada vez y va a sustituir el texto que se ha traído del HTML anidándolo
function increaseNumber() {
  intentos += 1;
  tries.innerHTML = 'Número de intentos ' + intentos;
}

//Listeners que ejecutan una función cuando se producen los eventos referidos
tryButton.addEventListener('click', enterValue);
playAgainBtn.addEventListener('click', reset);
