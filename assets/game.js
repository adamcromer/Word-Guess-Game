/* PsuedoCode
An array for all of the words the user is going to guess
key functions if user guesses which letter
Way to display _ and the correct amount for how many letters in the word
Something to confirm if you click the right letter that it appears in stead of the _
Score and how to display x amount of guesses left
What letters you've already guessed
Game over or You guess x correctly

*/

let wordsToGuess = ['elephant', 'giraffe', 'tiger', 'lion', 'pangolin', 'penguin'];
let guessProgress = [];
let currentChoice = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
// console.log(currentChoice.length);
for (i = 0; i < currentChoice.length; i++) {
    guessProgress.push('-');
}

document.getElementById("blankToGuess").outerHTML = guessProgress;


document.onkeyup = function() {
    userInput = String.fromCharCode(event.keycode).toLowerCase();

}

