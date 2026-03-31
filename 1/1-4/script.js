let username = prompt("Input your name wizard...", "Harry Potter")

let rand = Math.floor(Math.random() * 4)

switch (rand) {
	case 0:
		console.log(username + ", you are Griffindor")
		break;
	case 1:
		console.log(username + ", you are Slytherin")
		break;
	case 2:
		console.log(username + ", you are Hufflepuff")
		break;
	case 3:
		console.log(username + ", you are Ravenclaw")
		break;
}
