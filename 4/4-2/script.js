const query = document.getElementById("query");
const button = document.getElementById("btn");

button.addEventListener('click', async function() {
	const data = await fetch("https://api.tvmaze.com/search/shows?q=$" + query.value);
	const jsonData = data.json()
	console.log(jsonData);
});

