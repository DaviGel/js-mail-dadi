'use strict';

const numeroUtente = Math.floor(Math.random() * 7);
console.log('Utente:', numeroUtente);
const numeroPC = Math.floor(Math.random() * 7);
console.log('PC', numeroPC);

if (numeroUtente > numeroPC) {
  console.log('Utente vince!');
} else if (numeroPC > numeroUtente) {
  console.log('Computer vince!');
} else {
  console.log('La partita è patta!');
}
