window.onload = function () {
  // EMINEM ALBUMS:
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "c5acc987b6mshdd256644b8b3ea1p11cd63jsnab6920bb8e62",
    },
  })
    .then((responseBody) => responseBody.json())
    .then((artist) => getEminemAlbums(artist.data))
    .catch((error) => console.log(error));

  /* 
    <div class="card p-2 cb mx-2 mb-4" style="min-width: 150px; max-width: 200px;">
            <img src="./assets/album.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="card-title">Django Soundtrack</h6>
              <div class="play-btn-2 "></div>
              <a href="./artist-page.html" style="text-decoration-color: white;">
                <p class="cardtext">Some Great Arist!</p>
              </a>
            </div>
    </div>
    */
};
