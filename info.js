// Get the modal
var modal = document.getElementById("userAction");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the element that closes the modal
var span = document.getElementById("audio");

// When the window loads, open the modal
window.onload = function() {
  modal.style.display = "block";
  safariCheck();
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



function safariCheck() {
  
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    const warningText = "Your browser is not suported.\n\nTo best experience Clastic Music, use headphones on a desktop computer running Firefox or Chrome."
    alert(warningText);
    document.getElementsByClassName("info")[0].innerText = "";
    document.getElementsByClassName("info_warning")[0].innerText = "";
    document.getElementsByClassName("info_details")[0].innerText = warningText;

  }
}
