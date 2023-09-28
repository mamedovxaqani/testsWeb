import { answerQuestion } from "../../helpers/answersFunction";

const questionAnswer = (answers) => {
  let counter = 0;
  let counterQuestion = 0;
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
      "py-4"
    );

    li.addEventListener("click", (event) => {
      if (event.target.classList.contains("clicked-item") && counter === 1) {
        event.target.classList.remove("clicked-item");
        --counter;
        return;
      }

      if (!event.target.classList.contains("clicked-item") && counter < 1) {
        event.target.classList.add("clicked-item");
        ++counter;
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
