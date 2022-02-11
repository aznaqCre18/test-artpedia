const avrgWrapper = document.querySelector('.avrg-wrapper');

for (let index = 0; index < createStarComponent.totalStar; index++) {
  const starPlaceholder = document.createElement('div');
  starPlaceholder.classList.add('star');
  starPlaceholder.classList.add('placeholder');

  starPlaceholder.style.left = `${30 * index}px`;
  starPlaceholder.style.width = '30px';
  starPlaceholder.style.height = '30px';
  starPlaceholder.style.marginRight = '4px';

  starsAvrg.style.height = '30px';
  starsAvrg.style.width = `${30 * 5}`;


  starsAvrg.appendChild(starPlaceholder);
}