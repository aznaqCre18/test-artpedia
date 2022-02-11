function displayRatingReview(htmlClass, rate) {
  console.log(rate);
  const starsDisplayWrapper = document.querySelector(htmlClass);

  console.log(starsDisplayWrapper);

  let value = rate;
  let width = 30;
  let height = 30;
  let spacing = 4;

  let decimal = value % 1;
  let leftPos = 0;

  starsDisplayWrapper.style.height = `${height}px`;
  starsDisplayWrapper.style.width = `${width * 5}px`;

  function createStarPlaceHolderDisplay(index) {
    const starDisplay = document.createElement('div');
    starDisplay.classList.add('star');
    starDisplay.classList.add('placeholder');
    starDisplay.style.left = `${index * width}px`;
    starDisplay.style.height = `${height}px`;
    starDisplay.style.width = `${width}px`;
    starDisplay.style.marginRight = `${spacing}px`;
    
    starsDisplayWrapper.appendChild(starDisplay);
  }

  function createFullStarFill(index) {
    const starDisplay = document.createElement('div');
    starDisplay.classList.add('star');
    starDisplay.style.left = `${index * width}px`;
    starDisplay.style.height = `${height}px`;
    starDisplay.style.width = `${width}px`;
    starDisplay.style.marginRight = `${spacing}px`;
    
    starsDisplayWrapper.appendChild(starDisplay);
  }

  for (let index = 0; index < 5; index++) {
    createStarPlaceHolderDisplay(index);
  } 

  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPos = leftPos + width;
    createFullStarFill(index);
  }

  if (decimal > 0 && value <= 5) {
    const starDisplay = document.createElement('div');
    starDisplay.classList.add('star');
    starDisplay.style.left = `${leftPos}px`;
    starDisplay.style.height = `${height}px`;
    starDisplay.style.width = `${width * decimal}px`;
    starDisplay.style.marginRight = `${spacing}px`;

    starsDisplayWrapper.appendChild(starDisplay);
  }
}