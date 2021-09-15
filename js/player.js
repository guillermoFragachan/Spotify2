//set function that play audio on clikc 


//set function that change the player with the audio

//progress bar


//Pause <i class="bi bi-pause-fill"></i>


function pausePlay () {
  let playButton = document.getElementById('middle-icon')
  let pauseButton= document.createElement('i')
  pauseButton.classList.add('bi', 'bi-pause-fill')

  let parentArray = document.getElementsByClassName('top-part-song-nav')[0]

  let audio = document.getElementById('audio')


  let newB = document.createElement('i')
  

  newB.classList.add('bi-play-fill', 'bi')
  newB.setAttribute('id', 'middle-icon')
  
  let btnSelector = document.getElementsByClassName('bi-pause-fill')[0]

  if (parentArray.children[2]!==playButton){
    
    parentArray.replaceChild(newB, btnSelector)
    audio.pause()
    
    document.getElementsByClassName('bi-play-fill')[0].setAttribute("onclick", 'pausePlay()')
    



  }else if(parentArray.children[2].classList==='bi-play-fill'){
    console.log('try')
  }
  else{
    playButton.parentNode.replaceChild(pauseButton, playButton)
    audio.play()
    document.getElementsByClassName('bi-pause-fill')[0].setAttribute("onclick", 'pausePlay()')


  }
}




function changeNavbar(){


  let nodeAlbum = document.getElementById('album').children[0]


  let nodeAlbumNavbar = document.getElementsByClassName('left-song-nav')[0].children[0]
  let parentAlbum = document.getElementsByClassName('albumSelector')[0].parentElement
 

  parentAlbum.addEventListener('click', change )
  parentAlbum.addEventListener('click', pausePlay)

  function change(){
    nodeAlbumNavbar.src= nodeAlbum.src
    console.log(parentAlbum)
    document.getElementById('navTitle').innerHTML=document.getElementById('title').innerHTML
  }
  
  
}


function volume(event){
  let audio = document.getElementById('audio')
  //  audio.play()

  let volume = event.target.value /100;
  console.log(volume)
  audio.volume = volume;



  
}



//mute function
function mute(){
  let audio = document.getElementById('audio')
  let iconNode = document.getElementById('mute')
  
  if (audio.volume != 0){
    audio.volume = 0
    iconNode.src='./spotify-icons/mute.png'
  }else{
    audio.volume = 1
    iconNode.src='./spotify-icons/audio.png'

  }
}

let songIndex = 0


function skip(){
  let audioArray = document.getElementsByTagName('audio')
  

  console.log(audioArray)
}
//skip functon



//extra progress bar


function progress(){
  let audio = document.getElementById('audio')
  let inputNode = document.getElementById('pb') 

  let update = audio.duration * (inputNode.value / 100);
  
  // Set the current track position to the calculated seek position
  audio.currentTime = update;


  
  
}

function realtime(){
  let audio = document.getElementById('audio')
  let inputNode = document.getElementById('pb') 
  let seekPosition = 0;
  
 //set total duration
 let totalDurationNode = document.getElementById('totalduration')
 totalDurationNode.innerHTML= Math.floor(audio.duration/60) + ':'+ Math.floor(audio.duration /10)

 totalDurationNode.innerHTML.substr(-2)
 
 if (!isNaN(audio.duration)) {
    seekPosition = audio.currentTime * (100 / audio.duration)
    inputNode.value = seekPosition


    

    
  }
  let currentTimeNode = document.getElementById('currentDuration')
  let minutes = "0" + Math.floor(audio.currentTime / 60)
  let seconds = "0" + Math.floor(audio.currentTime)
  currentTimeNode.innerText = minutes.substr(-2) + ":" + seconds.substr(-2)


  
 
}

//update minutes
// query currentDuration


window.onload = function(){
  changeNavbar()
  progress()
  
  setInterval(realtime, 1)
}