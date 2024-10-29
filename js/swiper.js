    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const paginationDots = document.querySelectorAll('.swiper-pagination-dot');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update slide position
    function updateSlidePosition() {
      swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      updatePagination();
    }

    // Function to update pagination dots
    function updatePagination() {
      paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    // Next slide functionality
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    });

    // Previous slide functionality
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    // Pagination dot click functionality
    paginationDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
      });
    });

    // Auto slide (optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    }, 10000); // Adjust the interval for auto sliding (milliseconds)

