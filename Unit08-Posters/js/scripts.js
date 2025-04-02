import { films } from "./films.js";
const btnDisplay = document.querySelector("#displaychange");
const pageBody = document.querySelector("body");
const parentClass = document.querySelector(".parent");
let grid = true;
let movieLength = films.length;

btnDisplay.addEventListener("click", () => {
    if (grid == true){
        btnDisplay.setAttribute("src", "Images/grid.svg")
        pageBody.className = "list";
        grid = false
    }
    else {
        btnDisplay.setAttribute("src", "Images/list.svg")
        pageBody.className = "grid";
        grid = true
    }
});

for (let x = 0; x < movieLength; x++) {
  let card = document.createElement("section");
  card.classList.add("futuristic-card");

  let cardText = document.createElement("div");
  cardText.classList.add("card-text");

  let moviePosterSrc =
    "images/" +
    films[x].image_path +
    ".jpg";
  let moviePoster = document.createElement("img");
  moviePoster.setAttribute("src", moviePosterSrc);
  card.appendChild(moviePoster);

  let movieTitle = document.createElement("h3");
  movieTitle.innerHTML = films[x].title;
  movieTitle.classList.add("movie-title");
  cardText.appendChild(movieTitle);

  let movieDirector = document.createElement("p");
  movieDirector.innerHTML = `<strong>Director:</strong> ${films[x].director}`;
  movieDirector.classList.add("movie-info");
  cardText.appendChild(movieDirector);

  let movieProducer = document.createElement("p");
  movieProducer.innerHTML = `<strong>Producer:</strong> ${films[x].producer}`;
  movieProducer.classList.add("movie-info");
  cardText.appendChild(movieProducer);

  let movieRelease = document.createElement("p");
  movieRelease.innerHTML = `<strong>Released:</strong> ${films[x].release_date}`;
  movieRelease.classList.add("movie-info");
  cardText.appendChild(movieRelease);

  card.appendChild(cardText);


  parentClass.appendChild(card);
  

}