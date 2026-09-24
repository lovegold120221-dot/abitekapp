/* ========================
Custom Swiper Slider JS
===========================*/
var ecommerceSuggested = new Swiper(".suggested-product", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: false,
});

var ecommerceSuggested = new Swiper(".pet-similer", {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: false,
});

var ecommerceSuggested = new Swiper(".plant-product", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 1.8,
    },
    380: {
      slidesPerView: 2.2,
    },
    425: {
      slidesPerView: 2.4,
    },
  },
});

var ecommerceSuggested = new Swiper(".ecommerce-slide", {
  slidesPerView: 2.4,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var ecommerceSuggested = new Swiper(".plant-product-image", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var ecommerceSuggested = new Swiper(".grocery-product", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 1.8,
    },
    376: {
      slidesPerView: 2,
    },
  },
});

var groceryThumbnail = new Swiper(".grocery-product-thumbnail", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var groceryProduct = new Swiper(".grocery-product-image", {
  loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: groceryThumbnail,
  },
});
var petSimiler = new Swiper(".pet-smiler", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  loop: false,
});


var swiper = new Swiper(".food-slider", {
  spaceBetween: 12,
  slidesPerView: 3.8,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.8,
    },
    376: {
      slidesPerView: 2.8,
    },
    600: {
      slidesPerView: 3.8,
    },
  },
});

var swiper = new Swiper(".food-product-slider", {
  spaceBetween: 15,
  slidesPerView: 1.8,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    376: {
      slidesPerView: 1.5,
    },
    599: {
      slidesPerView: 1.8,
    },
    600: {
      slidesPerView: 1.8,
    },
  },
});

var swiper = new Swiper(".food-brand-slider", {
  spaceBetween: 10,
  slidesPerView: 3.4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    376: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3.4,
    },
  },
});


var swiper = new Swiper(".restaurant-brand-slider", {
  spaceBetween: 10,
  slidesPerView: 2.1,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    376: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.1,
    },
  },
});


var swiper = new Swiper(".restaurant-slider", {
  autoplay: {
    delay: 2000,
  },
  pagination: {
    slidesPerView: 3,
    el: ".swiper-pagination",
    clickable: "boolean",
  },
});


/* ===============
chat story js
===================*/
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".story-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><div class="progress-fill"></div></span>`;
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 3000,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      const activeBullet = document.querySelector(".swiper-pagination-bullet-active .progress-fill");
      if (activeBullet) {
        activeBullet.style.width = `${(1 - progress) * 100}%`;
      }
      if (progressContent) {
        progressContent.textContent = `${Math.ceil(time / 500)}s`;
      }
    }
  }
});


/* =============== Hotel Booking Js ===============*/

var swiper = new Swiper(".hotel-card-slider", {
  spaceBetween: 15,
  slidesPerView: 1.8,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 1.4,
    },
    575: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1.8,
    },
  },
});

var swiper = new Swiper(".hotel-slider", {
  spaceBetween: 0,
  effect: 'fade',
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".room-slide", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ============= learning JS==============*/
var swiper = new Swiper(".courses-slide", {
  spaceBetween: 15,
  slidesPerView: 1.8,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 1.4,
    },
    575: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1.8,
    },
  },
});


/* =========== furniture JS ==============*/
var smallSwiper = new Swiper(".product-sofa-small", {
  spaceBetween: 10,
  slidesPerView: 4,
  direction: "vertical",
  freeMode: true,
  watchSlidesProgress: true,
});
var mainSwiper = new Swiper(".product-sofa-section", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: smallSwiper,
  },
});
var swiper = new Swiper(".product-card-slide", {
  spaceBetween: 15,
  slidesPerView: 1.8,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 1.4,
    },
    575: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1.8,
    },
  },
});

/* =============== jewellery JS ===============*/
var smallSwiper = new Swiper(".product-gold-small", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var mainSwiper = new Swiper(".product-gold-section", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: smallSwiper,
  },
});

/* ========== salon JS =============*/
var swiper = new Swiper(".salon-slide", {
  spaceBetween: 15,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 1.4,
    },
    575: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1.9,
    },
  },
});

/* =============== Movie Slider ==================*/
var swiper = new Swiper(".watch-card-slider", {
  spaceBetween: 11,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".popular-card-slider", {
  spaceBetween: 11,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".popular-slide", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



