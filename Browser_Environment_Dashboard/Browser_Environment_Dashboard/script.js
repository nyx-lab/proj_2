const words = ["apple", "banana", "mango", "grape", "peach", "kiwi", "orange"];

let secretWord = words[Math.floor(Math.random() * words.length)];
console.log("Secret word:", secretWord);

let attemptsLeft = 5;

const userGuessInput = document.getElementById("userGuess");
const submitButton = document.getElementById("submitGuess");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const playAgainButton = document.getElementById("playAgain");

hint.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;

function checkGuess() {
    let guess = userGuessInput.value.trim().toLowerCase();

    if (guess === "") {
        message.textContent = "Invalid input! Please enter a word.";
        return;
    }

    if (guess === secretWord) {
        message.textContent = "🎉 Congratulations! You guessed the secret word!";
        message.style.color = "green";
        endGame();
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            message.textContent = `❌ Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
            message.style.color = "red";
        } else {
            message.textContent = `😢 Game over! The secret word was '${secretWord}'.`;
            message.style.color = "black";
            endGame();
        }
    }

    userGuessInput.value = "";
}

function endGame() {
    submitButton.disabled = true;
    userGuessInput.disabled = true;
    playAgainButton.style.display = "inline-block";
}

function restartGame() {
    attemptsLeft = 5;
    secretWord = words[Math.floor(Math.random() * words.length)];
    console.log("New secret word:", secretWord); // For testing

    hint.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
    message.textContent = "";
    userGuessInput.value = "";
    submitButton.disabled = false;
    userGuessInput.disabled = false;
    playAgainButton.style.display = "none";
}

submitButton.addEventListener("click", checkGuess);
playAgainButton.addEventListener("click", restartGame);
