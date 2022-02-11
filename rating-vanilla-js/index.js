const ratingContainer = document.getElementById('star-wrap');

function StarRating() {
  this.activeState = -1;
  this.hoverActiveStar = -1;
  this.isHovered = false;
  this.precision = 1;
  this.totalStar = 5;

  this.ratingUserList = [];
  this.reviewUserInput = '';
  
  this.showEmptyIcon = function(active, index) {
    return active === -1 || active < index + 1;
  };

  this.calculateRating = function(e) {
    const { width, left } = ratingContainer.getBoundingClientRect();
    let percent = (e.clientX - left) / width;

    const numberInStars = percent * this.totalStar;
    const nearestNumber = Math.round((numberInStars + this.precision / 2) / this.precision) * this.precision;

    return Number(nearestNumber.toFixed(this.precision.toString().split('.')[1]?.length || 0));
  }
}

const createStarComponent = new StarRating();