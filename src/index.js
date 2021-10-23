import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

Swiper.use([Navigation, Pagination]);

const pagination = {
  el: '.swiper-pagination',
  clickable: true
};
const navigation = {
  nextEl: '.swiper-next',
  prevEl: '.swiper-prev'
};
new Swiper('.banner-slider', {
  loop: true,
  pagination
});

[
  {
    el: '.partners-slider',
    slidesPerView: 6
  }
].forEach((config) => {
  let cb = (swiper) => {
    let startIndex = swiper.activeIndex;
    let endIndex = swiper.activeIndex + config.slidesPerView;

    swiper.slides.forEach((slide, i) => {
      console.log(i, startIndex, endIndex);
      if (i >= startIndex && i < endIndex)
        slide.removeAttribute('data-invisible');
      else slide.setAttribute('data-invisible', true);
    });
  };

  let slider = new Swiper(config.el, {
    loop: true,
    navigation,
    slidesPerView: config.slidesPerView,
    spaceBetween: 24,
    on: {
      afterInit: cb,
      slideChange: cb
    }
  });
});

new Swiper('.solutions-slider', {
  loop: true,
  navigation,
  slidesPerView: 3,
  spaceBetween: 24
});

new Swiper('.cooperation-slider', {
  loop: true,
  navigation,
  slidesPerView: 3,
  spaceBetween: 24
});

new Swiper('.cases-slider', {
  loop: true,
  navigation,
  slidesPerView: 3,
  spaceBetween: 24
});

new Swiper('.news-slider', {
  loop: true,
  navigation,
  slidesPerView: 4,
  spaceBetween: 24
});
