const query = document.getElementById("query");
const button = document.getElementById("btn");
const container = document.getElementById("shows");

button.addEventListener('click', async function() {
	const data = await fetch("https://api.tvmaze.com/search/shows?q=$" + query.value);
	const jsonData = await data.json();

	container.innerHTML = ""
	for (let i = 0; i < jsonData.length; i++) {
		const article = document.createElement("article")
		const title = document.createElement("h2");
		title.innerHTML = jsonData[i].show.name;
		article.appendChild(title)

		const link = document.createElement("a");
		link.innerHTML = jsonData[i].show.url;
		link.href = jsonData[i].show.url;
		link.target = "_blank";
		article.appendChild(link);

		const image = document.createElement("img");
		image.src = jsonData[i].show.image?.medium
		image.alt = jsonData[i].show.name
		article.appendChild(image)

		const summary = document.createElement("div")
		summary.innerHTML = jsonData[i].show.summary
		article.appendChild(summary)

		container.appendChild(article)
	}
});

