
var randomNumber;
var attempts;
var maxAttempts = 3;
var leaderboard = [];

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("guessButton").addEventListener("click", makeGuess);
document.getElementById("playAgain").addEventListener("click", startGame);

function startGame() {
  var difficulty = parseInt(document.getElementById("difficulty").value);
  randomNumber = Math.floor(Math.random() * difficulty) + 1;
  attempts = 0;
  document.getElementById("gameArea").classList.remove("hidden");
  document.getElementById("message").innerText = "";
  document.getElementById(
    "attempts"
  ).innerText = `Attempts: ${attempts}/${maxAttempts}`;
  document.getElementById("guessInput").value = "";
  document.getElementById("playAgain").classList.add("hidden");
}

function makeGuess() {
  var userGuess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (userGuess === randomNumber) {
    document.getElementById("message").innerText =
      "Congratulations! You guessed it right!";
    document.getElementById("playAgain").classList.remove("hidden");
    updateLeaderboard(attempts);
  } else if (attempts >= maxAttempts) {
    document.getElementById(
      "message"
    ).innerText = `Game over! The correct number was ${randomNumber}.`;
    document.getElementById("playAgain").classList.remove("hidden");
  } else {
    var  hint = userGuess < randomNumber ? "Too low!" : "Too high!";
    document.getElementById("message").innerText = hint;
  }

  document.getElementById(
    "attempts"
  ).innerText = `Attempts: ${attempts}/${maxAttempts}`;
}

function updateLeaderboard(attempts) {
  leaderboard.push(`Player ${leaderboard.length + 1}: ${attempts} attempts`);
  displayLeaderboard();
}

function displayLeaderboard() {
  var leaderboardDiv = document.getElementById("leaderboard");
  leaderboardDiv.innerHTML = "";

  for (var i = 0; i < leaderboard.length; i++) {
    var entry = document.createElement("p");
    entry.textContent = leaderboard[i];
    leaderboardDiv.appendChild(entry);
  }
}

