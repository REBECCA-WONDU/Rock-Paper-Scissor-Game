let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    tie: 0,
  };
}

updatescoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMoves();

  let result = "";
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You Loss.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissor") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissor") {
      result = "You Loss.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "You Loss.";
    } else if (computerMove === "scissor") {
      result = "You Win.";
    }
  }
  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Loss.") {
    score.losses += 1;
  } else if (result === "tie") {
    score.tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updatescoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="moves-img">
<img src="images/${computerMove}-emoji.png" class="moves-img">
Computer`;
}

function updatescoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, tie:${score.tie}`;
}

function pickComputerMoves() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "scissor";
  }
  return computerMove;
}