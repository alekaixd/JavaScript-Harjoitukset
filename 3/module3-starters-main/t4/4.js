'use strict';
const students = [
	{
		name: 'John',
		id: '2345768',
	},
	{
		name: 'Paul',
		id: '2134657',
	},
	{
		name: 'Jones',
		id: '5423679',
	},
];

const targetList = document.getElementById("target");

for (let i = 0; i < students.length; i++) {
	const item = document.createElement("option");
	targetList.appendChild(item).innerHTML = students[i]["name"];
	item.value = students[i]["id"]

}

