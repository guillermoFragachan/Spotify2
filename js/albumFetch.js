/*

ELEMENT

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


//fetch data


fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
.then(response => response.json())
.then(body => {
    console.log(body)
})