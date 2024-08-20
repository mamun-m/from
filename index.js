const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
const slide = document.querySelector("#slide");
let count = 0;

function showSlide(inde) {
  slide.src = images[inde];
}

function nextSlide(params) {
  count = (count + 1) % images.length;
  showSlide(count);
}

function prevSlide(params) {
  count = (count - 1 + images.length) % images.length;
  showSlide(count);
}
