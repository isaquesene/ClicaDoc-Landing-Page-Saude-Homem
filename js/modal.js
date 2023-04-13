var modal = document.getElementById("modal");
const btn = document.querySelectorAll('button[data-modal="open"]');
var span = document.getElementsByClassName("close")[0];

var b = document.getElementById("b");

btn.forEach((button) => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById('open-modal');
    modal.style.display = 'block';
    b.style.overflowY = 'hidden';
  });
});
