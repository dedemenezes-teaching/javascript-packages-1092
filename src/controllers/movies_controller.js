import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "results"]

  connect() {
    console.log("movies controller connected");
    this.searchMovies('back to the future')
  }

  searchMovies(queryString) {
    fetch(`http://www.omdbapi.com/?s=${queryString}&apikey=adf1f2d7`) // doing HTTP request
      .then(response => response.json())                              // parsing the response
      .then((data) => {                                               // use the javascript object
        this.resultsTarget.innerText = '';
        data.Search.forEach((movie) => {
          this.resultsTarget.insertAdjacentHTML('beforeend', `<li class="list-inline-item">
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
      </li>`);
        });
      });
  };

  search(event) {
    event.preventDefault()
    // this.resultsTarget.innerHTML = ""
    this.searchMovies(this.inputTarget.value)
  }
}
