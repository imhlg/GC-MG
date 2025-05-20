document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;
    let interval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    function prevImage() {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    }

    nextBtn.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevImage();
        resetInterval();
    });

    function startInterval() {
        interval = setInterval(nextImage, 4000);
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    showImage(current);
    startInterval();
});