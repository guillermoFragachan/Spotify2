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


function addContainer(_titleName){
    const bodyNode = document.querySelector('.mainPage')
    

    //add container
    let sectionNode = document.createElement('div')
    sectionNode.classList.add('SECTION')
    bodyNode.insertBefore(sectionNode, bodyNode.children[2])
    let titleNode = document.createElement('h5')
    titleNode.classList.add('m-4')
    titleNode.innerHTML=_titleName
    sectionNode.appendChild(titleNode)
    let containerNode = document.createElement('div')
    containerNode.classList.add('container-fluid', 'flex-wrap','d-flex', 'justify-content-start')
    sectionNode.appendChild(containerNode)
    

}

function playAudio(){
    console.log('hola')
}
function playerFunction(){
    let albumNode = document.getElementsByClassName('albumSelector')
    
    for(let i =0; i<albumNode.length; i++){
        let audio = document.querySelectorAll('.albumSelector>audio')[i]
        albumNode[i].addEventListener('click', playAudio)
    }
}





fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
.then(response => response.json())
.then(body => {
    console.log(body.data[0])

    addContainer('Eminem Songs')
    //container-fluid flex-wrap d-flex justify-content-start
    let containerNode = document.querySelectorAll('.container-fluid.flex-wrap.d-flex.justify-content-start')[1]
    //create card
    let card = document.createElement('div')
    card.classList.add('card', 'p-2', 'cb', 'mx-2', 'mb-4', 'cardWidth', 'albumSelector')
    card.setAttribute("id", "album");
    containerNode.appendChild(card)

    let imgNode= document.createElement('img')
    imgNode.src=body.data[0].album.cover
    card.appendChild(imgNode)


    //add audio prev

    let audioNode = document.createElement('audio')
    audioNode.src=body.data[0].preview
    audioNode.setAttribute('id', 'audio')
    card.appendChild(audioNode)
    
    

    //card body
    let cardBodyNode = document.createElement('div')
    cardBodyNode.classList.add('card-body')
    card.appendChild(cardBodyNode)

    //songtitle
    let songTitleNode = document.createElement('h6')
    songTitleNode.classList.add('card-title')
    songTitleNode.innerHTML=body.data[0].title_short
    cardBodyNode.appendChild(songTitleNode)


    //song artist
    let songArtistNode = document.createElement('p')
    songArtistNode.classList.add('cardtext')
    songArtistNode.innerHTML=body.data[0].artist.name

    cardBodyNode.appendChild(songArtistNode)
    

    

    
    
    

    console.log(containerNode)
    playerFunction()

})


window.onload = function(){
    
  }

