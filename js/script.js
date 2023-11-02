function playGame(playerInput) {

   clearMessages();

   //RandomNumber

   let randomNumber = Math.floor(Math.random() * 3 + 1);

   console.log('Wylosowana liczba to: ' + randomNumber);

   //ComputerMove

   function getMoveName(argMoveId) {
      if (argMoveId == 1) {
         return 'kamień';
      }

      else if (argMoveId == 2) {
         return 'papier';
      }

      else if (argMoveId == 3) {
         return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
   }

   let computerMove = getMoveName(randomNumber);

   // if (randomNumber == 1) {
   //    computerMove = 'kamień';
   // }
   // else if (randomNumber == 2) {
   //    computerMove = 'papier';
   // }

   // else if (randomNumber == 3) {
   //    computerMove = 'nożyce';
   // }

   printMessage('Ruch computera to: ' + computerMove + '.');

   console.log('Wylosowany numer to: ' + randomNumber);

   // PlayerMove

   // let playerInput = prompt('Wybierz swój ruch: 1-kamień, 2-papier, 3-nożyce');

   let playerMove = getMoveName(playerInput);

   // if (playerInput == '1') {
   //    playerMove = 'kamień';
   // }
   // else if (playerInput == '2') {
   //    playerMove = 'papier';
   // }
   // else if (playerInput == '3') {
   //    playerMove = 'nożyce';
   // }

   printMessage('Mój ruch to: ' + playerMove + '.');

   console.log('Wybrany numer to: ' + playerInput);

   // Result

   function displayResult(computerMove, playerMove) {
      printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

      // Result / Remis

      if (computerMove == 'kamień' && playerMove == 'kamień') {
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

   }

   displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
   playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
   playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
   playGame(3);
});