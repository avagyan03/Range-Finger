// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')

        let index = 0;

        function showGallery() {
            const images = document.querySelectorAll('.footer__img');
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function prev() {
            index = (index > 0) ? index - 1 : 0;
            showGallery();
        }

        function next() {
            const images = document.querySelectorAll('.footer__img');
            const maxIndex = images.length - 1;
            index = (index < maxIndex) ? index + 1 : maxIndex;
            showGallery();
        }

        // Կոճակների կցում ֆունկցիաներին
        document.getElementById('prevBtn').addEventListener('click', prev);
        document.getElementById('nextBtn').addEventListener('click', next);

        showGallery(); // Սկզբնական ցուցադրություն
  