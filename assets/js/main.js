// toggle between header logo js

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".header-logo").toggleClass("myclass");
    $(".logo-para").toggleClass("new-para");
  });
});

// oncick close menu js

if ($(window).width() < 992) {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false,
  });
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      bsCollapse.toggle();
      $(".header-logo").toggleClass("myclass");
      $(".logo-para").toggleClass("new-para");
    });
  });
}

// show button top button js
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: 0,
    },
    "300"
  );
});

// swiper slider js
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    390: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    393: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    412: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    414: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    428: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    834: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    884: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1114: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1680: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// swiper slideview js
var swiper = new Swiper(".slideview", {
  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 6,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    834: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    884: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});