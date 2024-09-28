// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')
function slider() {
    // const slider = document.querySelector(".slider");

    // if (!slider) {
    //     return;
    // }
    // const slider = slider.querySelector(".slider-list");
    
        const slider = document.querySelector(".slider");
        const sliderList = slider.querySelector(".slider__list");
        const sliderSlides = slider.querySelectorAll(".slider__item");
        const sliderButtonPre = slider.querySelector(".slider__button-prev");
        const sliderButtonnext = slider.querySelector(".slider__button-next");

        if (sliderList.scrollLeft === 0) {
            sliderButtonPre.style.display = "none";
        } else {
            sliderButtonPre.style.display = "flex";
        }

        sliderSlides.forEach(slide => {
            sliderButtonPre.addEventListener("click", () => {
                sliderList.scrollBy({
                    left: -slide.offsetWidth,
                    behavior: "smooth",
                });
            });

            if (sliderList.scrollLeft === 0 || sliderList.scrollLeft === sliderList.offsetWidth) {
                sliderButtonPre.style.display = "none";
            } else {
                sliderButtonPre.style.display = "inline-flex";
            }

            sliderButtonnext.addEventListener("click", () => {
                sliderList.scrollBy({
                    left: slide.offsetWidth,
                    behavior: "smooth",
                });
                if (sliderList.scrollLeft === 0 || sliderList.scrollLeft === sliderList.offsetWidth) {
                    sliderButtonPre.style.display = "none";
                } else {
                    sliderButtonPre.style.display = "inline-flex";
                }

                if (sliderList.scrollLeft === sliderList.scrollWidth - sliderList.offsetWidth) {
                    sliderList.scrollLeft = 0;
                }
            });
        });
        return slider;
    } 
