const createStarComponent = new StarRating();
let active;

const createPrecisionStarComponent = (index) => {
  ["mousemove", "mouseout", "click"].forEach(e => {
    ratingContainer.addEventListener(e, actionEvent)
  })

  function actionEvent (e)  {
    const imgStar = document.getElementById(`img-${index + 1}`)
    let type = e.type;
    active = createStarComponent.isHovered ? createStarComponent.hoverActiveStar : createStarComponent.activeState;

    if (type === 'click') {
      e.preventDefault();
      createStarComponent.activeState = createStarComponent.calculateRating(e);
      
      imgStar.src = createStarComponent.showEmptyIcon(active, index) ? './assets/icon/star2.svg' : './assets/icon/ic-star-on.svg';
    }

    if (type === 'mousemove') {
      e.preventDefault();
      createStarComponent.isHovered = true;
      createStarComponent.hoverActiveStar = createStarComponent.calculateRating(e);

      imgStar.src = createStarComponent.showEmptyIcon(active, index) ? './assets/icon/star2.svg' : './assets/icon/ic-star-on.svg';
    }

    if (type === 'mouseout') {
      e.preventDefault();
      createStarComponent.isHovered = false;
      createStarComponent.hoverActiveStar = -1;
      active = createStarComponent.isHovered ? createStarComponent.hoverActiveStar : createStarComponent.activeState;

      imgStar.src = createStarComponent.showEmptyIcon(active, index) ? './assets/icon/star2.svg' : './assets/icon/ic-star-on.svg';
    }
  }

  // element
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-half-star');
  wrapper.style.position = 'relative';
  wrapper.style.marginRight = '4px';

  const oneStar = document.createElement('div');
  oneStar.id = 'one-star';

  const imgBorder = document.createElement('img');
  imgBorder.id = `img-${index + 1}`
  imgBorder.src = './assets/icon/star2.svg';
  
  oneStar.appendChild(imgBorder);

  wrapper.appendChild(oneStar);
  return wrapper
}

for (let index = 0; index < createStarComponent.totalStar; index++) {
  ratingContainer.appendChild(createPrecisionStarComponent(index))
}

//take input from textfield input
const textFieldInputReview = document.querySelector('.user-review-input');

textFieldInputReview.addEventListener('change', function(e) {
  createStarComponent.reviewUserInput = e.target.value;
})