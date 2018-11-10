document.addEventListener("DOMContentLoaded", function (event) {

    let wordsToGuess = ['bear', 'crow', 'sloth', 'turkey', 'donkey', 'tarantula', 'scorpion', 'pigeon', 'mongoose', 'seagull', 'hawk', 'eagle', 'elephant', 'giraffe', 'tiger', 'lion', 'pangolin', 'penguin', 'zebra', 'flamingo', 'gorilla', 'wolf', 'fox', 'shark', 'octopus', 'monkey', 'lobster', 'hyena', 'moose', 'horse', 'goat', 'llama', 'alpaca', 'cheetah', 'pirahna', 'baracuda', 'manowar', 'capybara', 'emu'];
    let guessProgress = [];
    let lettersChosen = [];
    let lives = 7;
    let wins = 0;
    let losses = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let pressButton = "Press any button to begin.";
    let newGame = false;


    function pushToPage() {

        // document.getElementById("blankToGuess").innerHTML = pressButton;
        document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');
        document.getElementById("livesRemaining").innerHTML = lives;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;

    }

    pushToPage();

    document.getElementById("blankToGuess").innerHTML = pressButton;


    // This assigns the proper number of _ for the currentChoice.
    function randomWord() {
        // This picks a random index from wordsToGuess and assigns it to currentChoice.
        currentChoice = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

        // This logs the currentChoice for testing purposes.
        console.log(currentChoice);

        for (i = 0; i < currentChoice.length; i++) {
            guessProgress.push('_');
        }
    }

    function reset() {
        guessProgress = [];
        lettersChosen = [];
        lives = 7;

        randomWord();

    }

    document.onkeyup = function (event) {

        let chosenLetter = event.key.toLowerCase();

        if (newGame) {

            document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ');

            // Makes sure the button pressed is a letter of the alphabet.
            if (alphabet.indexOf(chosenLetter) != -1) {
                console.log("test");
                pushToPage();

                //Finds if the chosenletter is in currentChoice.
                if (currentChoice.indexOf(chosenLetter) != -1) {

                    //Loops on all characters in currentChoice. Just in case there's multiple.
                    for (let i = 0; i < currentChoice.length; i++) {

                        //If it does occur in current choice then set then show it on guessProgres.
                        if (currentChoice[i] === chosenLetter) {

                            guessProgress[i] = currentChoice[i];
                            
                            document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ');
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

                if (currentChoice === guessProgress.join('')) {

                    wins = wins + 1;
                    newGame = false;
                    document.getElementById("blankToGuess").innerHTML = "You win! Press any button to try again.";
                }

                if (lives === 0) {

                    // correctAns.textContent = ("The correct answer was " + currentChoice + ".");
                    // tryAgain.textContent = ("Try again?");
                    // wrongBody.textContent = ("");
                    losses = losses + 1;

                    document.getElementById("blankToGuess").innerHTML = "You lose! The correct answer was " + currentChoice + ". Press any button to try again.";

                    newGame = false;
                }
            }

            pushToPage();
        }

        else {
            guessProgress = [];
            lettersChosen = [];
            lives = 7;
            
            newGame = true;

            randomWord();
            pushToPage();

            document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ');
        }
    }
});