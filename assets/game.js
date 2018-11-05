/* PsuedoCode
An array for all of the words the user is going to guess
key functions if user guesses which letter
Way to display _ and the correct amount for how many letters in the word
Something to confirm if you click the right letter that it appears in stead of the _
Score and how to display x amount of guesses left
What letters you've already guessed
Game over or You guess x correctly

*/


// let wordsToGuess = ['elephant', 'giraffe', 'tiger', 'lion', 'pangolin', 'penguin', 'zebra', 'flamingo', 'gorilla', 'wolf', 'fox'];
// let guessProgress = [];
// let lettersChosen = [];

// // This picks a random index from wordsToGuess and assigns it to currentChoice.
// let currentChoice = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

// // This assigns the proper number of _ for the currentChoice.
// for (i = 0; i < currentChoice.length; i++) {
//     guessProgress.push('_');
// }

// // This logs the currentChoice for testing purposes.
// console.log(currentChoice);

// let chosenLetter = prompt("Enter a letter");

// // console.log(chosenLetter);

// // document.onkeyup = function(event) {
// //     let chosenLetter = String.fromCharCode(event.keyCode).toLowerCase();
// //     console.log(chosenLetter);

//     //Finds if the chosenletter is in currentChoice.
//     if (currentChoice.indexOf(chosenLetter) != -1) {

//         //Loops on all characters in currentChoice. Just in case there's multiple.
//         for (let i = 0; i < currentChoice.length - 1; i++) {

//             //If it does occur in current choice then set then show it on guessProgres.
//             if (currentChoice[i] === chosenLetter) {
//                 guessProgress[i] = currentChoice[i];
//             }
//         }
//     }

//     else {
//         lettersChosen.push(chosenLetter);
//     }

// // }

// // This assigns the H1 element to show on screen and replaces commas with spaces instead.
// document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ');
// document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');

