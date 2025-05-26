const shoot = document.getElementById("shoot");
const robo = document.getElementById("robo-life");
const person = document.getElementById("person-life");

const personDisplay = document.getElementById("person-display");
const roboDisplay = document.getElementById("robo-display");

const reset = document.getElementById("reset");

const life = 500;
const critical = 90;
let roboLife = life;
let personLife = life;

const display = (who, what) => {
  return `${who} did ${what > critical ? "critical" : what} damage`;
};

const game = () => {
  const roboDamage = Math.floor(Math.random() * 101);
  const personDamage = Math.floor(Math.random() * 101);

  personLife = personLife - personDamage;
  roboLife = roboLife - roboDamage;

  robo.style.width = `${Math.max(roboLife, 0)}px`;
  person.style.width = `${Math.max(personLife, 0)}px`;

  personDisplay.innerText = display("Person", roboDamage);
  roboDisplay.innerText = display("Robo", personDamage);
};

shoot.addEventListener("click", () => {
  game();

  if (roboLife > 0 && personLife <= 0) {
    alert(`Game Over! Robo win!`);
    restart();
  }

  if (roboLife <= 0 && personLife > 0) {
    alert(`Game Over! Person win!`);
    restart();
  }
});

const restart = () => {
  roboLife = life;
  personLife = life;
  robo.style.width = `${Math.max(roboLife, 0)}px`;
  person.style.width = `${Math.max(personLife, 0)}px`;
  personDisplay.innerText = "";
  roboDisplay.innerText = "";
};

reset.addEventListener("click", () => {
  restart();
});
