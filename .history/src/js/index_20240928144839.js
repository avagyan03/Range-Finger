// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
let index = 0;
function slider() {
    const footer__container = document.querySelector('.footer__container');
    footer__container.style.transform = `translateX(-${index * 100}px)`;

}
function prev() {
    index = (index > 0) ? index - 1 : 0;
    slider();
}
function next() {
    const slider = document.querySelector('.footer__container');
    const max = footer__container.length - 1;
    index = (index < max) ? index + 1 : max;
    slider();
}
slider();
