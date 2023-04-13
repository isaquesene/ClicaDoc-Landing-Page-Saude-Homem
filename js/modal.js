var modal = document.getElementById("modal");
var btn = document.querySelectorAll('button[data-modal="open"]');
var span = document.getElementsByClassName("close")[0];

var b = document.getElementById("b");

btn.forEach((button) => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById('open-modal');
    modal.style.display = 'block';
  });
});

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