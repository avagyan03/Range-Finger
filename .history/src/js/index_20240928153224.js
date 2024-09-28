// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
let index = 0;
function slider() {
    const slides = document.querySelector('.footer__container');
    slides.style.transform = `translateX(-${index * 300}px)`;

}
function prev() {
    index = (index > 0) ? index - 1 : 0;
    slider();
}
function next() {
    const slides = document.querySelector('.footer__container');
    const max = slides.children.length - 3;
    index = (index < max) ? index + 1 : max;
    slider();
}
document.getElementById("prevBtn").addEventListener("click", prev);
document.getElementById("nextBtn").addEventListener("click", next);

slider();
