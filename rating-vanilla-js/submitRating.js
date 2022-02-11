const btnSubmitRating = document.querySelector('.submit');
const starsAvrg = document.querySelector('.stars-avrg');

if(createStarComponent.ratingUserList.length < 1) {
  const listReviewSection = document.querySelector('.list-review-section');
  
  const emptyData = document.createElement('div');
  emptyData.classList.add('empty-data');
  emptyData.innerHTML = "Rating kosong"

  listReviewSection.appendChild(emptyData);
}

btnSubmitRating.addEventListener('click', async (e) => {
  createStarComponent.ratingUserList.push({rate: createStarComponent.activeState, text: createStarComponent.reviewUserInput});

  closeModal(e);

  const listReviewSection = document.querySelector('.list-review-section');
  let child = listReviewSection.lastElementChild;
  let sumOfRate = 0;
  let rateAverage;

  
  if(createStarComponent.ratingUserList.length !== 0) {
    while(child) {
      listReviewSection.removeChild(child);
      child = listReviewSection.lastElementChild;
    }
    createStarComponent.ratingUserList.map((value, idx) => {
      const listRatingWrapper = document.createElement('div');
      const starsRating = document.createElement('div');
      const testimoni = document.createElement('div');

      const rateValueNumber = document.createElement('span');
      const userTestimoni = document.createElement('span');

      sumOfRate = sumOfRate + value.rate;
      
      rateValueNumber.classList.add('rate-value-number');
      userTestimoni.classList.add('user-testimoni');

      rateValueNumber.innerHTML = value.rate;
      userTestimoni.innerHTML = value.text !== '' ? `, ${value.text}` : `, tidak ada pesan`;

      testimoni.appendChild(rateValueNumber);
      testimoni.appendChild(userTestimoni);
    
      listRatingWrapper.classList.add('list-rating-wrapper');
      listRatingWrapper.classList.add(`user-${idx}`);
      starsRating.classList.add('stars-rating');
      starsRating.classList.add(`rate-${idx}`);
      testimoni.classList.add('testimoni');
      
      listRatingWrapper.appendChild(starsRating);
      listRatingWrapper.appendChild(testimoni);
      
      listReviewSection.appendChild(listRatingWrapper);
      displayRatingReview(`.rate-${idx}`, value.rate);
    })

    const averageCount = document.querySelector('.avrg-count');
    
    rateAverage = sumOfRate / createStarComponent.ratingUserList.length;
    averageCount.innerHTML = `${rateAverage.toFixed(1)}`;

    let childStarsAvrg = starsAvrg.lastElementChild;

    while(childStarsAvrg) {
      starsAvrg.removeChild(childStarsAvrg);
      childStarsAvrg = starsAvrg.lastElementChild;
    }

    displayRatingReview('.stars-avrg', rateAverage.toFixed(1));
  }
})