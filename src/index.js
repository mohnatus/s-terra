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

new Swiper('.partners-slider', {
  loop: true,
  navigation,
  slidesPerView: 6,
  spaceBetween: 24
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

console.log('hello');
