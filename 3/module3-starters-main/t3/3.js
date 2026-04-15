'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetList = document.getElementById("target");

for (let i = 0; i < names.length; i++) {
	const item = document.createElement("li");
	targetList.appendChild(item).innerHTML = names[i];
}
