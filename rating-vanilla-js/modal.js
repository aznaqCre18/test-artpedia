const btnAddReview = document.querySelector('.btn-add-review');
const modalOverlay = document.querySelector('.modal-overlay');
const btnCloseModal = document.querySelector('.cancel');

btnAddReview.addEventListener('click', (e) => {
  e.preventDefault();
  modalOverlay.classList.add('open');
});

btnCloseModal.addEventListener('click', (e) => {
  closeModal(e);
});

function closeModal(e) {
  e.preventDefault();

  createStarComponent.activeState = -1;
  createStarComponent.reviewUserInput = '';
  for (let index = 0; index < createStarComponent.totalStar; index++) {
    const imgInputStar = document.getElementById(`img-${index + 1}`);
    imgInputStar.src = './assets/icon/ic-star-border.svg';
  }
  textFieldInputReview.value = "";
  modalOverlay.classList.remove('open');
}