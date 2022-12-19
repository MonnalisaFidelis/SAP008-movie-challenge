import './index.css';
import App from './App';
import { async } from 'q';
//import { getMovies } from './api.js';

const main = document.getElementById('root');
const movies = document.getElementById('movies');

fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=36d24538fcf17f4ad17c021b7b56a206`)
.then(response => {
  return response.json();
}).then(movie => {
  console.log(movie.results)
  const arrMovies = movie.results
  movies.innerHTML = arrMovies.map(element => {
    return `
      <div class=movie>
        <h4>${element.original_title || element.original_name}</h4>
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}">
      </div>
    `
  }).join('')
}); 

main.innerHTML=`
<h1>Loves in the Air</h1>
`
