const query = document.getElementById("query");
const button = document.getElementById("btn");

button.addEventListener('click', FetchData());
async function FetchData() {

	const data = await fetch("https://api.tvmaze.com/search/shows?q=$" + query.value);
	console.log(data);

}

