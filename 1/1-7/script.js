let diceRolls = Number(prompt("How many dice rolls?"));


function RollDie() {
	die = Math.floor(Math.random() * 6 + 1);
	return die;
}

let sum = 0
for (i = 0; i < diceRolls; i++) {
	sum += RollDie();
}

document.getElementById("dice").innerHTML = sum;
