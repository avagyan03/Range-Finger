// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')

const slides = document.querySelector('.footer__container container');
let currentSlide = 0;

const prevBtn = document.querySelector('.footer__prev');
const nextBtn = document.querySelector('.footer__next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide > slides) {
    currentSlide++;
    showSlide(currentSlide);
  }
});
