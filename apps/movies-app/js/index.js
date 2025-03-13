$(function() {
  let debounceTimeout = null
  $('#searchInput').on('input', function() {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)
  })

  $('#showMore').on('click', function(e) {
      e.preventDefault();
      onShowMoreClicked()
  })
})

function getMovie(title) {
  if (!title) {
      return
  }

  onBeforeSend()
  fetchMovieFromApi(title)
}

function fetchMovieFromApi(title) {
  axios.get(`http://www.omdbapi.com/?t=${title}&apikey=c79ee41a`)
      .then(response => { handleResults(response.data) })
      .catch(error => console.error('Error: ', error))
}

function handleResults(result) {
  if (result.Response === 'True') {
      render(result)
      hideComponent('#waiting')
  } else if (result.Response === 'False') {
      hideComponent('#waiting')
      showComponent('#notFound')
  }
}

function onBeforeSend() {
  showComponent('#waiting') 
  hideComponent('#movie')
  hideComponent('#notFound')
  hideComponent('#error')
}

function onApiError() {
  hideComponent('#waiting')
  showComponent('#error')
}

function onShowMoreClicked() {
  $('.extended').slideToggle(1000); // Toggle visibility with a sliding animation
}

function showComponent(jQueryComponent) {
  return $(jQueryComponent).removeClass('hidden')
}

function hideComponent(jQueryComponent) {
  return $(jQueryComponent).addClass('hidden')
}

function render(data) {
  // Construct IMDb URL
  const imdbUrl = `https://www.imdb.com/title/${data.imdbID}`;

  // Set the IMDb link
  const imdbLink = document.getElementById("imdbId");
  imdbLink.href = imdbUrl;

  // Update other movie details
  document.getElementById("title").textContent = data.Title;
  document.getElementById("year").textContent = `Έτος παραγωγής: ${data.Year}`;
  document.getElementById("runtime").textContent = `Διάρκεια: ${data.Runtime}`;
  document.getElementById("genre").textContent = `Είδος: ${data.Genre}`;
  document.getElementById("imdbRating").textContent = data.imdbRating;
  document.getElementById("plot").textContent = data.Plot;
  document.getElementById("director").querySelector("span").textContent = data.Director;
  document.getElementById("actors").querySelector("span").textContent = data.Actors;
  document.getElementById("production").querySelector("span").textContent = data.Production;
  document.getElementById("boxOffice").querySelector("span").textContent = data.BoxOffice;
  document.getElementById("language").querySelector("span").textContent = data.Language;
  document.getElementById("rated").querySelector("span").textContent = data.Rated;

  // Set the movie poster
  const poster = document.getElementById("image");
  poster.src = data.Poster;
  poster.alt = data.Title;

  // Show the movie section
  document.querySelector(".movie").classList.remove("hidden");
  // hideComponent('#waiting')
}