var menuIcon = document.querySelector(".menu")
var sideBar = document.querySelector(".sideBar")
var container = document.querySelector(".container")
menuIcon.onclick = function(){
  sideBar.classList.toggle("small-sidebar")
  container.classList.toggle("large-container")
}