import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.scss';

Swiper.use([Navigation, Pagination]);

const pagination = {
  el: '.swiper-pagination'
};
const navigation = {
  nextEl: '.swiper-next',
  prevEl: '.swiper-prev'
};
new Swiper('.banner-slider', {
  loop: true,
  pagination
});

new Swiper('.partners-slider', {
  loop: true,
  navigation,

  spaceBetween: 24,
  slidesPerView: 'auto',
});

new Swiper('.solutions-slider', {
  loop: true,
  navigation
});

new Swiper('.cooperation-slider', {
  loop: true,
  navigation
});

new Swiper('.cases-slider', {
  loop: true,
  navigation
});

console.log('hello');
