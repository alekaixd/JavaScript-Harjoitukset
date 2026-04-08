const numbers = []

while (true) {
	num = Number(prompt("Input number (0 to stop)"))
	if (num == 0) break;
	numbers.push(num)

}

sorted = numbers.sort(function(a, b) { return a - b })
for (i = 0; i < numbers.length; i++) {
	console.log(sorted[numbers.length - 1 - i])
}
