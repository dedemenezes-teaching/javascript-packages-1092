// RECAP
// const btn = document.querySelector('#click-me');

// btn.addEventListener('click', (event) => {
//   event.currentTarget.innerText = 'Calling API...';
//   event.currentTarget.setAttribute('disabled', true);
// });

// ========================================================

const list = document.querySelector('#results');
const input = document.querySelector('#search-input');

const searchMovies = (queryString) => {
  fetch(`http://www.omdbapi.com/?s=${queryString}&apikey=adf1f2d7`) // doing HTTP request
    .then(response => response.json())                              // parsing the response
    .then((data) => {                                               // use the javascript object
      list.innerText = '';
      data.Search.forEach((movie) => {
        list.insertAdjacentHTML('beforeend', `<li class="list-inline-item">
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
      </li>`);
      });
    });
};
const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  searchMovies(input.value);
});

const registerForm = document.getElementById('form');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailInput.value, password: passwordInput.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
});
