//RandomNumber

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

//ComputerMove

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
   computerMove = 'kamień';
}
else if (randomNumber == 2) {
   computerMove = 'papier';
}

else if (randomNumber == 3) {
   computerMove = 'nożyce';
}

printMessage('Ruch computera to: ' + computerMove + '.');

console.log('Wylosowany numer to: ' + randomNumber);

// PlayerMove

let playerInput = prompt('Wybierz swój ruch: 1-kamień, 2-papier, 3-nożyce');

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
   playerMove = 'kamień';
}
else if (playerInput == '2') {
   playerMove = 'papier';
}
else if (playerInput == '3') {
   playerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + playerMove + '.');

console.log('Wybrany numer to: ' + playerInput);

//Result / Remis

if(computerMove == 'kamień' && playerMove == 'kamień'){
   printMessage('Remis.');
}

else if (computerMove == 'papier' && playerMove == 'papier') {
   printMessage('Remis.');
}

else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
   printMessage('Remis.');
}

//Result / Win

if (computerMove == 'nożyce' && playerMove == 'kamień') {
   printMessage('Wygrywasz.');
}

else if (computerMove == 'kamień' && playerMove == 'papier') {
   printMessage('Wygrywasz.');
}

else if (computerMove == 'papier' && playerMove == 'nożyce') {
   printMessage('Wygrywasz.');
}

// Result / lose

if (computerMove == 'nożyce' && playerMove == 'papier') {
   printMessage('Przegrywasz.');
}

else if (computerMove == 'kamień' && playerMove == 'nożyce') {
   printMessage('Przegrywasz.');
}

else if (computerMove == 'papier' && playerMove == 'kamień') {
   printMessage('Przegrywasz.');
}