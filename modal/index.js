const modal = document.querySelector(".modal__overlay");
const bannerBtn = document.querySelector(".banner__btn");

bannerBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

const closeBtn = document.querySelector(".modal__btn");
const cross = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
cross.addEventListener("click", () => {
  modal.classList.remove("open");
});
