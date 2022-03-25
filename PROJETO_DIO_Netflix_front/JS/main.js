/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  */


  if (window.matchMedia("(min-width: 1020px)").matches) {
    /* a viewport tem pelo menos 400 pixels de largura */
    document.getElementById("video-BG").play = true
  } else {
    /* a viewport menos que 400 pixels de largura */
    document.getElementById("video-BG").muted = true;
  }