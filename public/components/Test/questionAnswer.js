import { answersQuestion } from "../../helpers/answersFunction";
import { correct_answers, incorrect_answers } from "../../data/answers";

const questionAnswer = (answers, correct_answer) => {
  let counter = 0;
  const ulAnswer = document.createElement("ul");
  ulAnswer.classList.add("list-group", "text-center");
  const liAnswer = answers.map((element) => {
    const li = document.createElement("li");
    li.classList.add("custom-li-item");
    li.classList.add(
      "list-group-item",
      "text-bold",
      "border",
      "rounded",
      "mt-2",
      "py-4",
      "animate__animated",
      "animate__fadeInLeft"
    );

    li.addEventListener("click", (event) => {
      if (event.target.classList.contains("clicked-item") && counter === 1) {
        event.target.classList.remove("clicked-item");
        --counter;
        return;
      }

      if (!event.target.classList.contains("clicked-item") && counter !== 1) {
        event.target.classList.add("clicked-item");

        answersQuestion(event.target.innerHTML, correct_answer);
        counter++;
        return;
      }

      if (!event.target.classList.contains("clicked-item") && counter == 1) {
        return;
      }
    });

    li.innerHTML = element;
    return li;
  });

  ulAnswer.append(...liAnswer);
  return ulAnswer;
};

export default questionAnswer;
