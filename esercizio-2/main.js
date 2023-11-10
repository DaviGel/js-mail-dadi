'use strict';

const numeroUtente = Math.floor(Math.random() * 6) + 1;
const numeroPC = Math.floor(Math.random() * 6) + 1;

if (numeroUtente > numeroPC) {
  console.log(
    `Utente vince con il punteggio di: ${numeroUtente} a ${numeroPC}`
  );
} else if (numeroPC > numeroUtente) {
  console.log(
    `Computer vince con il punteggio di: ${numeroPC} a ${numeroUtente}`
  );
} else {
  console.log(`La partita è patta con un punteggio di ${numeroPC}`);
}
