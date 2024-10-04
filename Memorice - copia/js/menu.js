var modal = document.getElementById("gameModal");
  var playBtn = document.getElementById("playButton");
  var span = document.getElementsByClassName("close")[0];


  playBtn.onclick = function(event) {
    event.preventDefault(); // Prevenir que el enlace redirija
    modal.style.display = "block"; // Mostrar modal
  }

  
  span.onclick = function() {
    modal.style.display = "none"; // Ocultar modal
  }

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }