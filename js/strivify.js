function attachPlayer(i){
  let song = document.getElementById(`song2`)
  song.parentElement.children[1].play()

  console.log(song)
}


function search (query){
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
    
  })
    .then((responseBody) => responseBody.json())
    .then((data) =>{

     let containerNode = document.querySelectorAll('#recently')[0]
     console.log(data.data[1])


     for(let i = 0; i< 6; i++){

        let card = document.createElement('div')
        card.innerHTML=`
        <div class="card p-2 cb mx-2 mb-4" style="min-width: 150px; max-width: 200px;">
         <img src="${data.data[i].artist.picture_big}" class="card-img-top" alt="...">
         <div class="card-body">
          <h6 class="card-title">${data.data[i].title}</h6>
          <audio src='${data.data[i].preview}'></audio>  
          <div class="play-btn-2 " id='song${i}'></div>
          
          <a href="./artist-page.html" style="text-decoration-color: white;">

          
          <p class="cardtext">${data.data[i].album.title}</p>
          </a>
        </div>
          </div>
        
        
        
        `
        card.addEventListener('click', () =>{

          window.location.assign(`./album.html?id=` + data.data[i].album.id + '&name=' + data.data[i].artist.name )

          //window.location.assign("./details.html?picId=" + photo.id)

          
        })

        //URLparameters.get("id")
        

        // card.addEventListener('click', () =>{
        //   let song = document.getElementById(`song${i}`)
        //   song.parentElement.children[1].play()
          

        // })
         
        containerNode.appendChild(card)
       
     }


    }
    
    
    )
    .catch((error) => console.log(error));



}






window.onload = function () {
  // EMINEM ALBUMS:
  search('metallica')
  

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
