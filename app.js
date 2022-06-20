//variables - getting DOM elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const divArea = document.getElementById("results");
const removeButton = document.getElementById("remove");

//

async function getGif(q) {
  const apiKey = "oNqXxcdshWD9iepwExUeRR9dfoRIMcHu";
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${q}`
  );

  console.log(response.data.data);

  // const gifArray = response.data.data;
  // const random = Math.floor(Math.random() * gifArray.length);

  const div = document.getElementById("results");
  const img = document.createElement("img");
  div.append(img);
  img.src = response.data.data.images.downsized.url;
}


searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const q = searchInput.value;
  getGif(q);
});

removeButton.addEventListener("click", function (e) {
  e.preventDefault();
  divArea.remove();
});
