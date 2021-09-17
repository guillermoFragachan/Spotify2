window.onload = function () {
  // EMINEM ALBUMS
  function getEminemAlbums(data) {
    // CONTAINER FOR ALBUM SUGGESTIONS:
    let morningContainer = document.querySelector(".good_morning_container");
    // LOOP THROUGH ALBUMS DATA:
    // ON PURPOSE ARBITRARY 10 ALBUMS SHOWN.
    // TRYING TO IMPLEMENT MODAL WHICH WOULD SHOW ALL OF THE ALBUMS FROM EMINEM.
    for (let i = 0; i < 10; i++) {
      if (data[i].album.title === data[i + 1].album.title) {
        continue;
      }
      // ADD CARD ELEMENT:
      let cardElement = document.createElement("div");
      cardElement.className = "d-flex align-items-center good_morning_section";
      cardElement.innerHTML = `<img src=${data[i].album.cover_medium} width="70" height="70" alt="">
        <p class="text_clamp_1 my-0">${data[i].album.title}</p>`;
      // APPEND TO CONTAINER:
      morningContainer.appendChild(cardElement);
    }
    // CREATE A BUTTON TO SHOW ALL ALBUMS
    let showAlbumsBtn = document.createElement("div");
    // Attributes for modal purposes:
    showAlbumsBtn.setAttribute("data-toggle", "modal");
    showAlbumsBtn.setAttribute("data-target", "#exampleModal");
    // Button styling:
    showAlbumsBtn.className = "good_morning_section py-4";
    showAlbumsBtn.innerText = "SHOW ALL ALBUMS";
    showAlbumsBtn.style.textAlign = "center";
    showAlbumsBtn.style.color = "#fff";

    // Append button after albums:
    morningContainer.appendChild(showAlbumsBtn);

    // Append modal HTML to Body:
    let modalContainer = document.createElement("div");
    modalContainer.className = "modal fade";
    modalContainer.setAttribute("id", "exampleModal");
    modalContainer.setAttribute("tabIndex", "-1");
    modalContainer.setAttribute("aria-labelledby", "exampleModalLabel");
    modalContainer.setAttribute("aria-hidden", "true");

    modalContainer.innerHTML = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>`;

  // I guess it won't matter where this modal is inserted in HTML???
  morningContainer.appendChild(modalContainer);

  }

  // METALLICA ALBUMS AND TRACKS
  function getMetallicaTracks(data) {
    // CONTAINER ELEMENT FOR RECENTLY PLAYED:
    let recentlyPlayedContainer = document.querySelector(
      ".recently-played-container"
    );
    // Change container to have horizontal scroll:
    recentlyPlayedContainer.style.flexWrap = "nowrap";
    recentlyPlayedContainer.style.overflowX = "scroll";

    for (let i = 0; i < data.length; i++) {
      let cardElement = document.createElement("div");
      cardElement.className = "spotify-card d-flex flex-column mb-4";
      cardElement.style.minWidth = "150px";

      cardElement.innerHTML = `<div class="p-2">
        <div>
          <img src=${data[i].album.cover} alt="">
        </div>
        <div class="mt-2">
          <h6 class="text_clamp_1">${data[i].artist.name}</h6>
          <p class="text_clamp_2">${data[i].title}</p>
        </div>
        </div>`;

      recentlyPlayedContainer.appendChild(cardElement);
    }
  }

  // GET BEHEMOTH ALBUMS AND TRACKS
  function getBehemoth(data) {
    let showsToTryContainer = document.querySelector(".shows-to-try-container");

    for (let i = 0; i < data.length; i++) {
      let cardElement = document.createElement("div");
      cardElement.className = "spotify-card d-flex flex-column";
      cardElement.innerHTML = `<div class="p-2">
        <div>
          <img src=${data[i].album.cover} alt="" class="podcast-img">
        </div>
        <div class="mt-2">
          <h6 class="text_clamp_1">${data[i].artist.name}</h6>
          <p class="text_clamp_2">${data[i].title}</p>
        </div>
      </div>`;

      showsToTryContainer.appendChild(cardElement);
    }
  }

  // FETCH FROM API:

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

  // METALLICA TRACKS - TO RECENTLY PLAYED SECTION:
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
    {
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "c5acc987b6mshdd256644b8b3ea1p11cd63jsnab6920bb8e62",
      },
    }
  )
    .then((responseBody) => responseBody.json())
    .then((artist) => getMetallicaTracks(artist.data))
    .catch((error) => console.log(error));

  // BEHEMOTH - TO SUGGESTIONS SECTION:
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth", {
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "c5acc987b6mshdd256644b8b3ea1p11cd63jsnab6920bb8e62",
    },
  })
    .then((responseBody) => responseBody.json())
    .then((artist) => getBehemoth(artist.data))
    .catch((error) => console.log(error));

};
