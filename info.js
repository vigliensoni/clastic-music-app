// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the element that closes the modal
var span = document.getElementById("audio");

// When the window loads, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on ```play```, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// } 