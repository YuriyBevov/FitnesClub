'use strict';
// скролл вниз к якорю()

(function () {
  var linkNav = document.querySelectorAll('.scroll-link');

  var SPEED = 0.5;
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      var height = window.pageYOffset;
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      var top = document.querySelector(hash).getBoundingClientRect().top;
      var start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }
        var progress = time - start;
        var result = (top < 0 ? Math.max(height - progress / SPEED, height + top) : Math.min(height + progress / SPEED, height + top));
        window.scrollTo(0, result);
        if (result !== height + top) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    }, false);
  }
})();

// слайдер отзывы

(function () {
  var sliderItem = document.querySelectorAll('.feedback__item');
  var previousBtn = document.querySelector('.feedback__slider-btn--previous');
  var nextBtn = document.querySelector('.feedback__slider-btn--next');
  var currentFeedback = document.querySelector('.feedback__item--active');
  var currentSlide = 0;
  var sliderLength = sliderItem.length - 1;

  for (var i = 0; i < sliderItem.length; i++) {
    if(sliderItem[i].classList.contains('feedback__item--active')) {
      var currentSlide = i;
    };
  };

  var showNextSlide = function () {
    if (previousBtn.classList.contains('visually-hidden')) {
      previousBtn.classList.remove('visually-hidden');
    }

    if (sliderItem[currentSlide] !== sliderItem[sliderLength]) {
      sliderItem[currentSlide].classList.remove('feedback__item--active');
      sliderItem[currentSlide].classList.add('feedback__item--hidden');
      sliderItem[currentSlide + 1].classList.remove('feedback__item--hidden');
      sliderItem[currentSlide + 1].classList.add('feedback__item--active');
      currentSlide = currentSlide + 1;
    }

    if (sliderItem[currentSlide] === sliderItem[sliderLength]) {
      nextBtn.classList.add('visually-hidden');
    }
  };

  var showPreviousSlide = function () {
    if (nextBtn.classList.contains('visually-hidden')) {
      nextBtn.classList.remove('visually-hidden');
    }

    if (sliderItem[currentSlide] !== sliderItem[0]) {
      sliderItem[currentSlide].classList.remove('feedback__item--active');
      sliderItem[currentSlide].classList.add('feedback__item--hidden');
      sliderItem[currentSlide - 1].classList.remove('feedback__item--hidden');
      sliderItem[currentSlide - 1].classList.add('feedback__item--active');
      currentSlide = currentSlide - 1;
    }

    if (sliderItem[currentSlide] === sliderItem[0]) {
      previousBtn.classList.add('visually-hidden');
    }
  };

  if (sliderItem[currentSlide] === sliderItem[0]) {
    previousBtn.classList.add('visually-hidden');
  }

  previousBtn.addEventListener('click', showPreviousSlide);
  nextBtn.addEventListener('click', showNextSlide);
})();

// тренеры слайдер

(function () {
  
})();
