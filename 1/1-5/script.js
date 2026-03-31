let year = Number(prompt("Input year"))

let isLeap = false
if (year % 4 === 0) {
	isLeap = true
	if (year % 100 === 0) {
		isLeap = year % 400 === 0
	}
}


if (isLeap == true) {
	console.log("The year " + year + " is a leap year")
}
else {
	console.log("The year " + year + " is not a leap year")
}
