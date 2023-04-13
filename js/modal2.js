var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("open-form2");
var span2 = document.getElementsByClassName("close2")[0];

var b = document.getElementById("b");



btn2.onclick = function() {
  modal2.style.display = "block";
  b.style.overflowY = 'hidden';
}

span2.onclick = function() {
  modal2.style.display = "none";
  b.style.overflowY = 'auto';
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    b.style.overflowY = 'auto';
  }
}