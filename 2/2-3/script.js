const dogs = []

for (i = 0; i < 6; i++) {
	pName = prompt("Input name of dog " + (i + 1))
	dogs.push(pName)
}

html = ""
for (i = 0; i < dogs.length; i++) {
	html += "<li>" + dogs[dogs.length - i - 1] + "</li>"
}

document.getElementById("list").innerHTML = html
