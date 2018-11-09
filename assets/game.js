let wordsToGuess = ['bear', 'crow', 'sloth', 'turkey', 'donkey', 'tarantula', 'scorption', 'pigeon', 'mongoose', 'seagull', 'hawk', 'eagle', 'elephant', 'giraffe', 'tiger', 'lion', 'pangolin', 'penguin', 'zebra', 'flamingo', 'gorilla', 'wolf', 'fox', 'shark', 'octopus', 'monkey', 'lobster', 'hyena', 'moose', 'horse', 'goat', 'llama', 'alpaca', 'cheetah', 'pirahna', 'baracuda', 'manowar', 'capybara', 'emu'];
        let guessProgress = [];
        let lettersChosen = [];
        let lives = 10;
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let mainBody = document.getElementById("mainBody");

        // This picks a random index from wordsToGuess and assigns it to currentChoice.
        let currentChoice = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length + 1) + 1];

        // This assigns the proper number of _ for the currentChoice.
        for (i = 0; i < currentChoice.length; i++) {
            guessProgress.push('_');
        }

        // This logs the currentChoice for testing purposes.
        console.log(currentChoice);


        document.onkeyup = function (event) {
            let chosenLetter = event.key.toLowerCase();

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
                document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ');
                document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');
                document.getElementById("livesRemaining").innerHTML = lives;

                if (currentChoice === guessProgress.join('')) {
                    let winDiv = document.createElement("h2");
                    let tryAgain = document.createElement("a");
                    tryAgain.setAttribute("id", "AgainButton");
                    winDiv.textContent = ("You win!");
                    tryAgain.textContent = ("Try again?");
                    tryAgain.href = ("/Word-Guess-Game/index.html")
                    mainBody.textContent = ("");
                    mainBody.appendChild(winDiv);
                    mainBody.appendChild(tryAgain);
                }

                if (lives === 0) {

                    let loseDiv = document.createElement("h2");
                    let tryAgain = document.createElement("a");
                    tryAgain.setAttribute("id", "AgainButton");
                    loseDiv.textContent = ("You lose! The correct answer was " + currentChoice + ".");
                    tryAgain.textContent = ("Try again?");
                    tryAgain.href = ("/Word-Guess-Game/index.html")
                    mainBody.textContent = ("");
                    mainBody.appendChild(loseDiv);
                    mainBody.appendChild(tryAgain);
                }
            }
        }
        // let container = document.getElementById("container").innerHTML
        document.getElementById("blankToGuess").innerHTML = guessProgress.join(' ');
        document.getElementById("lettersChosen").innerHTML = lettersChosen.join(' ');
        document.getElementById("livesRemaining").innerHTML = lives;