const questions = document.querySelectorAll(".faq__question-title");
const answers = document.querySelectorAll(".faq__question-answer");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    answers[index].classList.toggle("active");
  });
});
