var modal = document.getElementById("modal");
var btn = document.getElementsById("open-form");
var span = document.getElementsByClassName("close")[0];

var b = document.getElementById("b");



btn.onclick = function() {
  modal.style.display = "block";
  b.style.overflowY = 'hidden';
}

span.onclick = function() {
  modal.style.display = "none";
  b.style.overflowY = 'auto';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    b.style.overflowY = 'auto';
  }
}