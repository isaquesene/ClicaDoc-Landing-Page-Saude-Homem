const openModalButtons = document.querySelectorAll('.btn-prev');
const closeModalButton = document.querySelector('.close');
const modal = document.querySelector('#modal');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    b.style.overflowY = 'hidden';
  });
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
  b.style.overflowY = 'auto';
});