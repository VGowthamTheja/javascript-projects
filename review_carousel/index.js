const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");

let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto advance to the next slide every 5 seconds (5000ms)
setInterval(nextSlide, 5000);
