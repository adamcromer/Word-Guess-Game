document.addEventListener("DOMContentLoaded", function (event) {

    let wordsToGuess = ['bear', 'crow', 'sloth', 'turkey', 'donkey', 'tarantula', 'scorpion', 'pigeon', 'mongoose', 'seagull', 'hawk', 'eagle', 'elephant', 'giraffe', 'tiger', 'lion', 'pangolin', 'penguin', 'zebra', 'flamingo', 'gorilla', 'wolf', 'fox', 'shark', 'octopus', 'monkey', 'lobster', 'hyena', 'moose', 'horse', 'goat', 'llama', 'alpaca', 'cheetah', 'pirahna', 'baracuda', 'manowar', 'capybara', 'emu'];
    let guessProgress = [];
    let lettersChosen = [];
    let lives = 7;
    let wins = 0;
    let losses = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let wrongBody = document.getElementById("wrongBody");
    let pressButton = "Press any button to begin.";
    let newGame = false;

    // This picks a random index from wordsToGuess and assigns it to currentChoice.
    let currentChoice = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

    // This logs the currentChoice for testing purposes.
    console.log(currentChoice);

    document.getElementById("blankToGuess").innerHTML = pressButton;
    document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');
    document.getElementById("livesRemaining").innerHTML = lives;

    // This assigns the proper number of _ for the currentChoice.
    function randomWord() {
        for (i = 0; i < currentChoice.length; i++) {
            guessProgress.push('_');
        }
    }

    document.onkeyup = function (event) {
        let chosenLetter = event.key.toLowerCase();

        if (newGame) {

            // Makes sure the button pressed is a letter of the alphabet.
            if (alphabet.indexOf(chosenLetter) != -1) {

                //Finds if the chosenletter is in currentChoice.
                if (currentChoice.indexOf(chosenLetter) != -1) {

                    //Loops on all characters in currentChoice. Just in case there's multiple.
                    for (let i = 0; i < currentChoice.length; i++) {

                        //If it does occur in current choice then set then show it on guessProgres.
                        if (currentChoice[i] === chosenLetter) {

                            guessProgress[i] = currentChoice[i];

                        }
                    }
                }

                else {

                    if (lettersChosen.indexOf(chosenLetter) === -1) {
                        lettersChosen.push(chosenLetter);
                        lives = lives - 1;
                    }
                }

                // This assigns the H1 element to show on screen and replaces commas with spaces instead.
                document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ')
                document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');
                document.getElementById("livesRemaining").innerHTML = lives;

                if (currentChoice === guessProgress.join('')) {
                    let winDiv = document.createElement("h2");
                    let tryAgain = document.createElement("h2");
                    tryAgain.setAttribute("id", "againButton");
                    winDiv.textContent = ("You win!");
                    tryAgain.textContent = ("Try again?");
                    wrongBody.textContent = ("");
                    wrongBody.appendChild(winDiv);
                    wrongBody.appendChild(tryAgain);
                    wins = wins + 1;
                    console.log(wins);
                    newGame = false;
                    document.getElementById("blankToGuess").innerHTML = pressButton;
                }

                if (lives === 0) {

                    let loseDiv = document.createElement("h2");
                    let correctAns = document.createElement("h2");
                    let tryAgain = document.createElement("h2");
                    tryAgain.setAttribute("id", "againButton");
                    loseDiv.textContent = ("You lose!");
                    correctAns.textContent = ("The correct answer was " + currentChoice + ".");
                    tryAgain.textContent = ("Try again?");
                    wrongBody.textContent = ("");
                    wrongBody.appendChild(loseDiv);
                    wrongBody.appendChild(correctAns);
                    wrongBody.appendChild(tryAgain);
                    losses = losses + 1;
                    console.log(losses);
                    newGame = false;
                    document.getElementById("blankToGuess").innerHTML = pressButton;
                }
            }
        }

        else {
            guessProgress = [];
            randomWord();

            newGame = true;
            document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ')
            document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');
            document.getElementById("livesRemaining").innerHTML = lives;
        }
    }
});