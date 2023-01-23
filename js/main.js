let myBullets = document.querySelectorAll(".bullets li");
let myText = document.querySelectorAll(".text-wrapper h1");

let navOffset = document.querySelector("header .navbar");

//Remove Class Active From Bullets

myBullets.forEach(function (ele) {
  ele.onclick = function () {
    myBullets.forEach(function (e) {
      e.classList.remove("active_Bullet");
    });
    this.classList.add("active_Bullet");
  };
});

// Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  fade: "true",
  grabCursor: "true",
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

/*----------------------------------------*/

// var myImg = document.querySelectorAll("section.offer .container .img_side");
// myImg.forEach((ele) => {
//   ele.onmouseenter = () => {
    
//   };
// });
