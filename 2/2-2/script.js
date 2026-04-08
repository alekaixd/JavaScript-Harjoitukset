const participants = []
let amount = prompt("How many participants?")

for (i = 0; i < amount; i++) {
	pName = prompt("Input name of participant " + (i + 1))
	participants.push(pName)
}

html = ""
for (i = 0; i < participants.length; i++) {
	html += "<li>" + participants[i] + "</li>"
}

document.getElementById("list").innerHTML = html
