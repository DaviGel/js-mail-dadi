'use strict';

const emailAutorizzate = [
  'paolo.rossi@gmail.com',
  'mario.bianchi@gmail.com',
  'giorgio.verdi@gmail.com',
];

const emailUtente = prompt('Inserisci la tua e-mail');
let emailCheck = false;

for (let i = 0; i < emailAutorizzate.length; i++) {
  if (emailUtente === emailAutorizzate[i]) {
    emailCheck = true;
    break;
  }
}

if (emailCheck === true) {
  console.log('E-mail autorizzata!');
} else {
  console.log('E-mail non autorizzata!');
}
