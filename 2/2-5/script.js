const numbers = []

while (true) {
	num = Number(prompt("Input number"))
	if (numbers.includes(num)) {
		break
	}

	numbers.push(num)

}

sorted = numbers.sort(function(a, b) { return a - b })
for (i = 0; i < numbers.length; i++) {
	console.log(sorted[i])
}
