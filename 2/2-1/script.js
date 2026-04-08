const numbers = []

for (i = 0; i < 5; i++) {
	num = prompt("input number " + (i + 1))
	numbers.push(num)
}

output = ""
for (i = 0; i < numbers.length; i++) {
	output += numbers[numbers.length - i - 1]
}

document.getElementById("output").innerHTML = output
