const query = document.getElementById("query");
const button = document.getElementById("btn");

button.addEventListener('click', GetApiData);
async function GetApiData() {
	const data = await fetch("https://api.tvmaze.com/search/shows?q=$" + query.value);
	console.log(data);
}

