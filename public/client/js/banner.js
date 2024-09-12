let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  currentSlideIndex++;
  if (currentSlideIndex > slides.length) {
    currentSlideIndex = 1;
  }

  slides[currentSlideIndex - 1].style.display = 'block';
  slides[currentSlideIndex - 1].classList.add('fade');
  
  setTimeout(showSlides, 5000); 
}

document.addEventListener('DOMContentLoaded', showSlides);