let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
    attempts++;

    if (!userGuess) {
        message.textContent = "Please enter a number!";
    }
    else if (userGuess > secretNumber) {
        message.textContent = "Too High 🔺";
    }
    else if (userGuess < secretNumber) {
        message.textContent = "Too Low 🔻";
    }
    else {
        message.textContent =
            "🎉 Correct! You guessed it in " + attempts + " attempts.";
    }
}
