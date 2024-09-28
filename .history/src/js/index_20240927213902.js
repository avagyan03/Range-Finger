// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
let img = 0;

function N(index) {
    const slides = document.querySelectorAll('.footer__container');
    if (index >= slides.length) {
        img = 0;
        // console.log('end');
    } else {
        img = index;
        // console.log(index);
    }

    slides.forEach((slides, i) => {
        slides.classList.toggle('active', i === img);
    });
}

function M(direction) {
    N(img + direction);
    // console.log(img);
}


N(img);