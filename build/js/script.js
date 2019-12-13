'use strict';

// маска на инпут

(function () {
var phoneMask = IMask(
  document.getElementById('lesson-phone'), {
    mask: '+{7}(000)000-00-00'
  });
})();

// feedback slider

(function () {
  var swiper = new Swiper('.swiper-container', {
    //spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
