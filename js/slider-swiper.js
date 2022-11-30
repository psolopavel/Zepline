const swiper = new Swiper('.main-block__slider',{
    loop: true,
    spaceBetween: 20,
    parallax: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1200,
    pagination: {
        el: '.controll-main-block__dots',
        clickable: true,
    },
    on: {
      init: function (swiper){
        const AllSlider = document.querySelector('.fraction-controll__all')
        AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      },
      slideChange: function (swiper){
        const CurentSlider = document.querySelector('.fraction-controll__current')
        CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      },
    },
});
const swiper2 = new Swiper('.product-slider__slider',{
  loop: true,
  spaceBetween: 30,
  observer: true,
  observerParents: true,
  speed: 1200,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
      el: '.product-slider__dots',
      clickable: true,
      dynamicBullets:true,
  },
  breakpoints: {
    320:{
      autoHeight: true,
      slidesPerView: 0.95,
    },
    450:{
      slidesPerView: 1.2,
    },
    510:{
      slidesPerView: 1.5,
    },
    700:{
      slidesPerView: 2,
    },
    1120:{
      slidesPerView: 3,
    },
    1400:{
      slidesPerView: 4,
    },
  },
  on: {
  
  },
});
const swiper3 = new Swiper('.new-product__slider', {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
  pagination: {
      el: '.new-product__dots',
      clickable: true,
  },
  breakpoints: {
    1:{
      slidesPerView: 1,
    },
    1100:{
      slidesPerView: 2,
    },
    1360:{
      slidesPerView: 3,
    }
  },
});
const swiperProduct = new Swiper('.images-product__slider', {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1200,
});
const swiperProductThumbs = new Swiper('.thums-images', {
  spaceBetween: 30,
  slidesPerView: 4,
  speed: 1200,
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
