// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')

        // let index = 0;

        // function slider() {
        //     const images = document.querySelectorAll('.footer__img');
        //     images.forEach((img, i) => {
        //         img.classList.toggle('active', i === index);
        //     });
        // }

        // function prev() {
        //     index = (index > 0) ? index - 1 : 0;
        //     slider();
        // }

        // function next() {
        //     const images = document.querySelectorAll('.footer__img');
        //     const maxIndex = images.length - 1;
        //     index = (index < maxIndex) ? index + 1 : maxIndex;
        //     slider();
        // }

        // document.getElementById('prevBtn').addEventListener('click', prev);
        // document.getElementById('nextBtn').addEventListener('click', next);

        // slider(); 



        export function slider(elem) {
            const slider = document.querySelector(`[data-slider="${elem}"]`);
        
            console.log("slider", slider);
        
        
            const sliderList = slider.querySelector(".slider__list");
        
            const sliderSlides = slider?.querySelectorAll(".slider__slide");
        
            const sliderButtonPre = slider.querySelector(".slider__button_prev");
            console.log("slider", sliderButtonPre);
        
        
        
            const sliderButtonnext = slider.querySelector(".slider__button_next");
            console.log("slider", sliderButtonnext);
            console.log("sliderSlides", sliderSlides);
        
        
            sliderSlides.forEach(slide => {
                console.log("slide", slide);
        
                sliderButtonPre.addEventListener("click", () => {
                    console.log("click pre");
        
                    sliderList.scrollBy({
                        left: -slide.offsetWidth,
                        behavior: "smooth",
                    });
                });
        
        
                sliderButtonnext.addEventListener("click", () => {
                    console.log("click next");
        
                    sliderList.scrollBy({
                        left: slide.offsetWidth,
                        behavior: "smooth",
                    });
        
                    if (Math.floor(sliderList.scrollLeft) === sliderList.scrollWidth - sliderList.offsetWidth) {
                        sliderList.scrollLeft = 0;
                    }
                });
            });
        
            return slider;
        };
        










  