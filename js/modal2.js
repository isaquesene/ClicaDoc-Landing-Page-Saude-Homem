var modal2 = document.getElementById("modal2");
var btn = document.getElementById("open-form");
var span = document.getElementsByClassName("close")[0];

var b = document.getElementById("b");



btn.onclick = function() {
  modal2.style.display = "block";
  b.style.overflowY = 'hidden';
}

span.onclick = function() {
  modal2.style.display = "none";
  b.style.overflowY = 'auto';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
    b.style.overflowY = 'auto';
  }
}