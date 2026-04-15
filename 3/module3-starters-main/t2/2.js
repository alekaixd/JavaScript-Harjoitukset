'use strict';
const targetList = document.getElementById("target");

const first = document.createElement("li");
const second = document.createElement("li");
const third = document.createElement("li");

second.classList.toggle("my-item");

targetList.appendChild(first).innerHTML = "First item";
targetList.appendChild(second).innerHTML = "Second item";
targetList.appendChild(third).innerHTML = "Third item";
