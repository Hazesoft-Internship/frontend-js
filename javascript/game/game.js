let maxHealth = 500;
let health1 = maxHealth;
let health2 = maxHealth;
let player1Health = document.getElementById("player1-health");
let player2Health = document.getElementById("player2-health");
let commentBox = document.getElementById("comment-box");
let attackButton = document.getElementById("attack-button");
let player1Bar = document.getElementById("player1-bar");
let player2Bar = document.getElementById("player2-bar");

function updateHealthBars() {
  player1Bar.style.width = (health1 / maxHealth) * 100 + "%";
  player2Bar.style.width = (health2 / maxHealth) * 100 + "%";

  player1Bar.style.backgroundColor = health1 < 100 ? "red" : "green";
  player2Bar.style.backgroundColor = health2 < 100 ? "red" : "green";
}

function resetGame() {
  health1 = maxHealth;
  health2 = maxHealth;
  player1Health.textContent = "Health: " + health1;
  player2Health.textContent = "Health: " + health2;
  updateHealthBars();
  commentBox.innerHTML = "";
  attackButton.textContent = "Attack";
  attackButton.disabled = false;
}

attackButton.addEventListener("click", function () {
  if (attackButton.textContent === "Reset") {
    resetGame();
    return;
  }

  let damage1 = Math.floor(Math.random() * 100) + 1;
  let damage2 = Math.floor(Math.random() * 100) + 1;

  health1 -= damage2;
  health2 -= damage1;

  if (health1 < 0) health1 = 0;
  if (health2 < 0) health2 = 0;

  player1Health.textContent = "Health: " + health1;
  player2Health.textContent = "Health: " + health2;

  updateHealthBars();

  let comment = document.createElement("p");
  comment.textContent =
    "Human did " +
    damage1 +
    " damage" +
    (damage1 > 90 ? " (Fatal!)" : "") +
    ", Robot did " +
    damage2 +
    " damage" +
    (damage2 > 90 ? " (Fatal!)" : "");
  commentBox.appendChild(comment);

  commentBox.scrollTop = commentBox.scrollHeight;

  if (health1 === 0 && health2 === 0) {
    let result = document.createElement("p");
    result.textContent = "It's a draw!";
    commentBox.appendChild(result);
    attackButton.textContent = "Reset";
  } else if (health1 === 0) {
    let result = document.createElement("p");
    result.textContent = "Robot wins!";
    commentBox.appendChild(result);
    attackButton.textContent = "Reset";
  } else if (health2 === 0) {
    let result = document.createElement("p");
    result.textContent = "Human wins!";
    commentBox.appendChild(result);
    attackButton.textContent = "Reset";
  }
});

updateHealthBars();
