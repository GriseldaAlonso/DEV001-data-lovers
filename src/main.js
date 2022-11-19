import data from './data/ghibli/ghibli.js';
import {searchData, directorFilter, yearSort} from './data.js';

const ghibliData = data.films;
let dataView = data.films;
const movieContainer = document.getElementById("movieBox");
const inputSearch = document.querySelector(".cards-filter");
let selectDirector = document.getElementById("director");
let sortSelector = document.getElementById("sortGhibli");
const showCount = document.getElementById("showCount");

//función que limpia el div movieContainer
const cleanContainer = () => {
	movieContainer.innerHTML = "";
  };

//funcion crear tarjetas de peliculas
function createMovies (movie){
	let movieTemplate = `
		<div class="movie" id="${movie.id}">
			<div class="poster-container" id="poster">
		  		<img class="img" src=${movie.poster} alt="Poster Castle_in_the_Sky"></img>
			</div>
			<div class="text" id="text">
				<h3 class="movie-name">${movie.title}</h3>
		  		<p class="year">${movie.release_date}</p>
			</div>
		</div>
	`;
	movieContainer.innerHTML += movieTemplate;
	document.querySelectorAll('.movie').forEach(movie => {
        movie.addEventListener('click', () => {
            let film_id = movie.id;
			return alert (film_id);
        })
    });
} 


//mostrar contenido pagina principal
function showAllMovies(ghibliData){
	ghibliData.forEach(createMovies);
	
}
//evento que carga todas las peliculas al cargar la pagina
window.addEventListener("load", () => { 
    showAllMovies(ghibliData);
});

//funcion input de busqueda, llamada desde data.js
inputSearch.addEventListener("keyup", () => {
	selectDirector.value = "all";
	sortSelector.value= "";
	const allMovies = searchData(ghibliData, 'title', inputSearch.value);
	cleanContainer();
	const countMovie = allMovies.length;
	showCount.innerText = "Showing " + countMovie + " results";
	allMovies.forEach(createMovies);
})

// funcion filtro con input de selector
selectDirector.addEventListener('change', (event) =>{
	const selectDirectorValue = event.target.value;
	if (selectDirectorValue === "all"){
		cleanContainer();
		showAllMovies(ghibliData)
	} else {
		dataView = directorFilter(ghibliData, selectDirectorValue);
	cleanContainer();
	dataView.forEach(movie => {
		const countMovie = dataView.length;
		showCount.innerText = "Showing " + countMovie + " results";
		createMovies(movie)
	});
	}
}) 

//función sort con input selector
sortSelector.addEventListener("change", (event) =>{
	let selectorValue = event.target.value;
	if (selectorValue !== ""){
		dataView = yearSort(dataView, selectorValue);
		cleanContainer();
		dataView.forEach(movie=>{
			createMovies(movie)
		})	
	} else {
		dataView = data.films;
	}
})
