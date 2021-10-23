import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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
  },
  {
    el: '.solutions-slider',
    slidesPerView: 3
  },
  {
    el: '.cooperation-slider',
    slidesPerView: 3
  },
  {
    el: '.cases-slider',
    slidesPerView: 3
  },
  {
    el: '.news-slider',
    slidesPerView: 4
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

  new Swiper(config.el, {
    //loop: true,
    navigation,
    slidesPerView: config.slidesPerView,
    spaceBetween: 24,
    on: {
      afterInit: cb,
      slideChange: cb
    }
  });
});


new Accordion('.faq-accordion')
