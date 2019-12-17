'use strict';

// маска на инпут

(function () {
  var phoneInput = document.getElementById('lesson-phone');

  if (phoneInput) {
    var phoneMask = IMask(
      phoneInput, {
        mask: '+{7}(000)000-00-00'
      });
  }
})();

// Табы

(function () {
  var tab = document.querySelectorAll('.subscription__toggle-label');
  var list = document.querySelectorAll('.subscription__list');

    var onClickHandler = function () {
    var attr = this.getAttribute('id');

    for (var i = 0; i < list.length; i++) {
      list[i].style.display = 'none';
      list[attr].style.display = 'flex';
    }
  }

  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onClickHandler);
  }
})();

// feedback slider

(function () {
  var feedbackSwiper = new Swiper('.feedback__slider-box.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var coachSwiper = new Swiper('.coach__slider-box.swiper-container', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 4,
        slidesPerGroup: 4,

        spaceBetween: 40
      }
    },

    navigation: {
      nextEl: '.coach__btn.swiper-button-next',
      prevEl: '.coach__btn.swiper-button-prev',
    },
  });
})();

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
