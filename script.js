const API_KEY = `292df11527f4d3eda77ec38172d1a2bf`
const image_path = `https://image.tmdb.org/t/p/w500`
const trailer_path = `https://www.youtube.com/watch?v=`
const BASE_URL = 'https://api.themoviedb.org/3';

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

const release_dates = {
  "release_dates_ids": [
    {
      "iso_3166_1": "BG",
      "release_date_id": "1990-08-28"
    },
    {
      "iso_3166_1": "CH",
      "release_date_ids": [
        {
          "iso_639_1": "de",
          "release_date_id": "1999-11-04"
        },
        {
          "iso_639_1": "fr",
          "release_date_id": "1999-11-10"
        }
      ]
    },
    {
      "iso_3166_1": "IE",
      "release_date_id": "1999-11-12"
    },
    {
      "iso_3166_1": "MY",
      "release_date_ids": [
        {
          "iso_639_1": "hu",
          "release_date_id": "2000-01-01"
        },
        {
          "iso_639_1": "ji",
          "release_date_id": "2000-05-13"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2000-01-02"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2001-02-02"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2001-03-18"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2001-04-08"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2002-05-01"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2002-06-25"
        },

        {
          "iso_639_1": "gi",
          "release_date_id": "2002-01-21"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2003-02-03"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2003-03-15"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2003-04-16"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2004-05-18"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2004-06-12"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2004-07-15"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2005-08-31"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2005-09-29"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2005-10-27"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2006-11-15"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2006-12-18"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2006-09-21"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2007-01-05"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2007-05-18"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2007-02-16"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2008-04-19"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2008-06-21"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2008-08-10"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2009-01-02"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2009-03-16"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2010-08-28"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2010-10-30"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2010-02-26"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2011-04-18"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2011-01-15"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2011-03-21"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2012-08-17"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2012-04-19"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2012-12-25"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2013-08-31"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2013-08-10"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2013-01-02"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2014-03-16"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2014-08-28"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2014-10-30"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2015-02-26"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2015-04-18"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2015-01-15"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2016-03-21"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2016-08-17"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2016-04-19"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2017-12-25"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2017-08-31"
        },
        {
          "iso_639_1": "hu",
          "release_date_id": "2017-01-01"
        },
        {
          "iso_639_1": "ji",
          "release_date_id": "2018-05-13"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2018-01-02"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2018-02-02"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2019-03-18"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2019-04-08"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2019-05-01"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2020-06-25"
        },

        {
          "iso_639_1": "gi",
          "release_date_id": "2020-01-21"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2020-02-03"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2021-03-15"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2021-04-16"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2021-05-18"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2022-06-12"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2022-07-15"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2022-08-31"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2023-09-29"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2023-10-27"
        },
        ,
        {
          "iso_639_1": "gi",
          "release_date_id": "2023-04-16"
        },
        {
          "iso_639_1": "fi",
          "release_date_id": "2024-01-18"
        },
        {
          "iso_639_1": "ei",
          "release_date_id": "2024-02-12"
        },
        {
          "iso_639_1": "gi",
          "release_date_id": "2024-03-15"
        }



      ]
    }

  ]
}

const ratings = {
  "page": 1,
  "results": [
    {
      "id": 278, 
      "vote_average": 8.7,
    },
    {
      "id": 238,
      "vote_average": 8.6
    },
    {
      "id": 772071,
      "vote_average": 8.4 
    },
    {
      "id": 240,
      "vote_average": 8.6
    },
    {
      "id": 424,
      "vote_average": 8.6
    },
    {
      "id": 19404,
      "vote_average": 8.6
    },
    {
      "id": 129,
      "vote_average": 8.5
    },
    {
      "id": 389,
      "vote_average": 8.5
    },
    {
      "id": 372058,
      "vote_average": 8.5
    },
    {
      "id": 503,
      "vote_average": 5.8
    },
    {
      "id": 310,
      "vote_average": 6.7
    },
    {
      "id": 12,
      "vote_average": 7.8
    }
  ]
}

const input = document.querySelector('.input-box input')
const btn = document.querySelector('.input-box button')
const main_grid = document.querySelector('.movies-grid')
const tagsEl = document.getElementById('genre-list')
const popup_container = document.querySelector('.popup-container')


function add_click_effect_to_card (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => show_popup(card))
    })
}

//<<<<<<<  Release Date Filter  >>>>>>>//

// Add release dates to the dropdown
function addReleaseDatesToDropdown() {
  const dropdown = document.getElementById('date-list');

  // Flatten release_dates object to extract release dates
  const allReleaseDates = release_dates.release_dates_ids.flatMap(dateObj => {
    if (dateObj.release_date_id) {
      return [dateObj.release_date_id];
    } else if (dateObj.release_date_ids) {
      return dateObj.release_date_ids.map(subDateObj => subDateObj.release_date_id);
    }
    return [];
  });

  // Adding release dates to the dropdown
  allReleaseDates.forEach(releaseDate => {
    const option = document.createElement('option');
    option.value = releaseDate;
    option.textContent = releaseDate;
    dropdown.appendChild(option);
  });
}

// For add event listener to release date dropdown
function addReleaseDateEventListener() {
  const dateDropdown = document.getElementById('date-list');

  dateDropdown.addEventListener('change', async function() {
    const selectedDate = this.value;
    await addMoviesByReleaseDate(selectedDate);
  });
}

// For get movies by release date
async function getMoviesByReleaseDate(releaseDate) {
  const resp = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${releaseDate}&primary_release_date.lte=${releaseDate}`);
  const respData = await resp.json();
  return respData.results;
}

async function addMoviesByReleaseDate(releaseDate) {
  const data = await getMoviesByReleaseDate(releaseDate);         // For add movies to DOM based on release date
  main_grid.innerHTML = data.map(e => {
    return `                                                        
      <div class="card" data-id="${e.id}">
        <div class="img">
          <img src="${image_path + e.poster_path}">           
        </div>
        <div class="info">
          <h2>${e.title}</h2>                             
          <div class="single-info">
            <span>Rate: </span>
            <span>${e.vote_average} / 10</span>
          </div>
          <div class="single-info">
            <span>Release Date: </span>
            <span>${e.release_date}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const cards = document.querySelectorAll('.card');
  add_click_effect_to_card(cards);
}

addReleaseDateEventListener();             // Call function to add event listener to release date dropdown
addReleaseDatesToDropdown();               // Call for add to the dropdown


 //<<<<<<<<  Genre Filter >>>>>>>//


function addGenresToDropdown() {
  const dropdown = document.getElementById('genre-list');
  genres.forEach(genre => {
      const option = document.createElement('option');       // Function to add genres to the dropdown
      option.value = genre.id;
      option.textContent = genre.name;
      dropdown.appendChild(option);
  });
}

async function get_movies_by_genre(genre) {
  const resp = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`);
  const respData = await resp.json();
  return respData.results;
}
async function add_movies_to_dom(genre) {
  const data = await get_movies_by_genre(genre);
  main_grid.innerHTML = data.map(e => {
      return `
          <div class="card" data-id="${e.id}">
              <div class="img">
                  <img src="${image_path + e.poster_path}">
              </div>
              <div class="info">
                  <h2>${e.title}</h2>
                  <div class="single-info">
                      <span>Rate: </span>
                      <span>${e.vote_average} / 10</span>
                  </div>
                  <div class="single-info">
                      <span>Release Date: </span>
                      <span>${e.release_date}</span>
                  </div>
              </div>
          </div>
      `;
  }).join('');

  const cards = document.querySelectorAll('.card');
  add_click_effect_to_card(cards);
}

tagsEl.addEventListener('change', () => add_movies_to_dom(tagsEl.value));

addGenresToDropdown();  // call for add to the dropdown


                              ///<<<<<<< Ratings Filter >>>>>>>>>/////

// Add ratings to the ratings dropdown
function addRatingsToDropdown() {
  const dropdown = document.getElementById('rating-list');

  // Iterate over the ratings data and add each rating as an option to the dropdown
  ratings.results.forEach(movie => {
    const option = document.createElement('option');
    option.value = movie.id;
    option.textContent = `${movie.vote_average} / 10`;
    dropdown.appendChild(option);
  });
}

addRatingsToDropdown();     // call for add to the dropdown



async function getMoviesByRating(movieId) {
  const resp = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);    // Function to get movies by rating
  const respData = await resp.json();
  return respData;
}

                  //Function to add event listener to ratings dropdown
function addRatingEventListener() {
  const ratingDropdown = document.getElementById('rating-list');

  ratingDropdown.addEventListener('change', async function() {
    const selectedMovieId = this.value;
    await addMoviesByRating(selectedMovieId);
  });
}

// Function to add movies to DOM based on rating
async function addMoviesByRating(movieId) {
  const movie = await getMoviesByRating(movieId); 
  main_grid.innerHTML = `
    <div class="card" data-id="${movie.id}">
      <div class="img">
        <img src="${image_path + movie.poster_path}">
      </div>
      <div class="info">
        <h2>${movie.title}</h2>
        <div class="single-info">
          <span>Rate: </span>
          <span>${movie.vote_average} / 10</span>
        </div>
        <div class="single-info">
          <span>Release Date: </span>
          <span>${movie.release_date}</span>
        </div>
      </div>
    </div>
  `;
  const card = document.querySelector('.card');
  add_click_effect_to_card([card]); // Assuming you want to add click effect to the card
}

// Call function to add event listener to ratings dropdown
addRatingEventListener();


// SEARCH MOVIES
async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`)
    const respData = await resp.json()
    console.log(respData.results);
    return respData.results
}

// SEARCH BUTTON DISABLE WHEN INPUT EMPTY
function checkInput() {
  btn.disabled = input.value.trim() === '';
}

input.addEventListener('input', checkInput);



btn.addEventListener('click', add_searched_movies_to_dom)

async function add_searched_movies_to_dom () {
    const data = await get_movie_by_search(input.value)
    console.log(data);

    main_grid.innerHTML = data.map(e=>{
        return`

        <div class="card" data-id="${e.id}">
        <div class="img">
            <img src="${image_path + e.poster_path}">
        </div>
        <div class="info">
            <h2>${e.title}</h2>
            <div class="single-info">
                <span>Rate: </span>
                <span>${e.vote_average} / 10</span>
            </div>
            <div class="single-info">
                <span>Release Date: </span>
                <span>${e.release_date}</span>
            </div>
        </div>
    </div>
        `
    }).join('')

    const cards = document.querySelectorAll('.card')
    add_click_effect_to_card(cards)
}

async function show_popup (card) {
    popup_container.classList.add('show-popup')
}


// POPUP
async function get_movie_by_id (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData
}

async function get_movie_trailer (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData.results[0].key
}

async function get_movie_cast (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData.cast.slice(0, 5) // Limiting to 5 cast members
}

async function show_popup (card) {
    popup_container.classList.add('show-popup')

    const movie_id = card.getAttribute('data-id')
    const movie = await get_movie_by_id(movie_id)
    const movie_trailer = await get_movie_trailer(movie_id)
    const cast = await get_movie_cast(movie_id)
 
    popup_container.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(${image_path + movie.poster_path})`

    popup_container.innerHTML = `
            <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="${image_path + movie.poster_path}" alt="">
                    </div>
                </div>
                <div class="right">
                    <h1>${movie.title}</h1>
                    <h3>${movie.tagline}</h3>
                    <div class="single-info-container">
                        <div class="single-info">
                            <span>Language:</span>
                            <span>${movie.spoken_languages[0].name}</span>
                        </div>
                        <div class="single-info">
                            <span>Length:</span>
                            <span>${movie.runtime} minutes</span>
                        </div>
                        <div class="single-info">
                            <span>Rate:</span>
                            <span>${movie.vote_average} / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Budget:</span>
                            <span>$ ${movie.budget}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date:</span>
                            <span>${movie.release_date}</span>
                        </div>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            ${movie.genres.map(e => `<li>${e.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cast">
                        <h2>Cast</h2>
                        <ul>
                            ${cast.map(actor => `<li>${actor.name} (${actor.character})</li>`).join('')}
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Overview</h2>
                        <p>${movie.overview}</p>
                    </div>
                    <div class="trailer">
                        <h2>Trailer</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${movie_trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                   
                </div>
            </div>
    `

    const x_icon = document.querySelector('.x-icon')
    x_icon.addEventListener('click', () => popup_container.classList.remove('show-popup'))

}