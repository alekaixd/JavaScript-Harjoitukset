let calc = confirm("Should I calculate the square root")

if (calc == true) {
	let num = Number(prompt("Input Number"))
	let sqrt = Math.sqrt(num)
	alert(sqrt)
}
else {
	alert("The square root is not calculated")
}

