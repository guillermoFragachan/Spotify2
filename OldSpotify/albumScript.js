
function stopSongs() {
    let songSelector = document.getElementsByTagName('audio')
    for (let i = 0; i < songSelector.length; i++) {
        songSelector[i].pause()
        
    }

}




function playAudio() { 
    
    stopSongs()
    document.getElementById("audio").play(); 
    document.getElementById("playTrack").style.backgroundColor="green";
    document.getElementById("pauseTrack").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>20th Century Fox Fanfare (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track1").style.backgroundColor="darkSlateGray";
    
} 

function pauseAudio() { 
    stopSongs()
    document.getElementById("audio").pause(); 
    document.getElementById("pauseTrack").style.backgroundColor="green";
    document.getElementById("playTrack").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio2() { 
    stopSongs()
    document.getElementById("audio2").play(); 
    document.getElementById("playTrack2").style.backgroundColor="green";
    document.getElementById("pauseTrack2").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Somebody To Love (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track2").style.backgroundColor="darkSlateGray";
} 

function pauseAudio2() { 
    stopSongs()
    document.getElementById("audio2").pause(); 
    document.getElementById("pauseTrack2").style.backgroundColor="green";
    document.getElementById("playTrack2").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio3() { 
    stopSongs()
    document.getElementById("audio3").play(); 
    document.getElementById("playTrack3").style.backgroundColor="green";
    document.getElementById("pauseTrack3").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Doing All Right - ...Revisited (Smile)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track3").style.backgroundColor="darkSlateGray";
} 

function pauseAudio3() { 
    stopSongs()
    document.getElementById("audio3").pause(); 
    document.getElementById("pauseTrack3").style.backgroundColor="green";
    document.getElementById("playTrack3").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio4() { 
    stopSongs()
    document.getElementById("audio4").play(); 
    document.getElementById("playTrack4").style.backgroundColor="green";
    document.getElementById("pauseTrack4").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Keep Yourself Alive - Live At The Rainbow (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track4").style.backgroundColor="darkSlateGray";
} 

function pauseAudio4() { 
    stopSongs()
    document.getElementById("audio4").pause(); 
    document.getElementById("pauseTrack4").style.backgroundColor="green";
    document.getElementById("playTrack4").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio5() { 
    stopSongs()
    document.getElementById("audio5").play(); 
    document.getElementById("playTrack5").style.backgroundColor="green";
    document.getElementById("pauseTrack5").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Killer Queen (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track5").style.backgroundColor="darkSlateGray";
} 

function pauseAudio5() { 
    stopSongs()
    document.getElementById("audio5").pause(); 
    document.getElementById("pauseTrack5").style.backgroundColor="green";
    document.getElementById("playTrack5").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio6() { 
    stopSongs()
    document.getElementById("audio6").play(); 
    document.getElementById("playTrack6").style.backgroundColor="green";
    document.getElementById("pauseTrack6").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Fat Bottomed Girls (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track6").style.backgroundColor="darkSlateGray";
} 

function pauseAudio6() { 
    stopSongs()
    document.getElementById("audio6").pause(); 
    document.getElementById("pauseTrack6").style.backgroundColor="green";
    document.getElementById("playTrack6").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio7() { 
    stopSongs()
    document.getElementById("audio7").play(); 
    document.getElementById("playTrack7").style.backgroundColor="green";
    document.getElementById("pauseTrack7").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Bohemian Rhapsody (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track7").style.backgroundColor="darkSlateGray";
} 

function pauseAudio7() { 
    stopSongs()
    document.getElementById("audio7").pause(); 
    document.getElementById("pauseTrack7").style.backgroundColor="green";
    document.getElementById("playTrack7").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio8() { 
    stopSongs()
    document.getElementById("audio8").play(); 
    document.getElementById("playTrack8").style.backgroundColor="green";
    document.getElementById("pauseTrack8").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Now I'm Here - Live At The Hammersmith Odeon (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track8").style.backgroundColor="darkSlateGray";
} 

function pauseAudio8() { 
    stopSongs()
    document.getElementById("audio8").pause(); 
    document.getElementById("pauseTrack8").style.backgroundColor="green";
    document.getElementById("playTrack8").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function playAudio9() { 
    stopSongs()
    document.getElementById("audio9").play(); 
    document.getElementById("playTrack9").style.backgroundColor="green";
    document.getElementById("pauseTrack9").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "NOW PLAYING: <strong>Crazy Little Thing Called Love (Queen)</strong>";
    document.getElementById("stopIcon").style.fill="#121212";
    document.getElementById("track9").style.backgroundColor="darkSlateGray";
} 

function pauseAudio9() { 
    stopSongs()
    document.getElementById("audio9").pause(); 
    document.getElementById("pauseTrack9").style.backgroundColor="green";
    document.getElementById("playTrack9").style.backgroundColor="#1CBB52";
    document.getElementById("playingText").innerHTML = "PAUSED";
    document.getElementById("stopIcon").style.fill="#1CBB52";
} 

function favourite1() {
    document.getElementById("heart1").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite2() {
    document.getElementById("heart2").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite3() {
    document.getElementById("heart3").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite4() {
    document.getElementById("heart4").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite5() {
    document.getElementById("heart5").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite6() {
    document.getElementById("heart6").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite7() {
    document.getElementById("heart7").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite8() {
    document.getElementById("heart8").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}

function favourite9() {
    document.getElementById("heart9").style.fill = "white";
    setTimeout(function(){ alert("Added to Favourites"); });
}






