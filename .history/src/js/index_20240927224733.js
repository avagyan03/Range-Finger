// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

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
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});
