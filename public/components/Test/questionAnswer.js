import addedAttibutes from "../../helpers/addedAttibutes";
import { answersQuestion } from "../../helpers/answersFunction";
import convertTitle from "../../helpers/converTitle";
import converAnswer from "../../helpers/convertAnswer";
import randomAnswerPlace from "../../helpers/randomAnswerPlace";

const questionAnswer = (answers, correct_answer) => {
  const randomAnswers = randomAnswerPlace(answers);
  let counter = 0;
  const ulAnswer = document.createElement("ul");
  ulAnswer.classList.add("list-group", "text-center");
  const liAnswer = randomAnswers.map((element) => {
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

    li.innerHTML = converAnswer(element);
    addedAttibutes(li, element);
    return li;
  });

  ulAnswer.append(...liAnswer);
  return ulAnswer;
};

export default questionAnswer;
