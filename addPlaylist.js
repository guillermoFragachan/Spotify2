const open =  document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

const playlistName = document.getElementById('playlistName')
const playlisyList = document.getElementById("playlist_list")

const openModal = function () {
  open.addEventListener("click", () => {
    modal_container.classList.add("show")
  })
  
  close.addEventListener("click", () => {
    modal_container.classList.remove("show")
  })
}


const addPlaylist = function(name) {
  liNode = document.createElement("li")
  liNode.classList.add("nav-item")

  playlisyList.prepend(liNode)
  
  const innerLinkNode = document.createElement("a")
  innerLinkNode.classList.add("nav-link")
  innerLinkNode.setAttribute("href", "#")
  innerLinkNode.innerHTML=name
  liNode.prepend(innerLinkNode)


  const playlistNameValue = liNode.appendChild(document.createTextNode(playlistName.value))
  innerLinkNode.prepend(playlistNameValue)
}