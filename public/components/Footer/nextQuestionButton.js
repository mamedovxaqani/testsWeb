import Header from "../Header/header";
import Test from "../Test/Test";
import Footer from "./Footer";
import { correct_answers } from "../../data/answers";
import { showAnswers } from "../Answers/showAnswers";

const nextQuestionButton = (questions, root, qlength) => {
  const button = document.createElement("button");
  button.innerHTML = "Next Question";
  button.classList.add("next-button");

  button.addEventListener("click", () => {
    if (!questions.length) {
      alert(`Вопросы закончились: ${correct_answers.length}/${qlength}`);
      root.innerHTML = "";
      root.append(showAnswers(correct_answers));
      return;
    }

    if (questions.length !== 0) {
      const curr = questions.pop();

      const domElements = [
        Header(questions.length + 1, qlength),
        Test(curr),
        Footer(questions, root, qlength),
      ];

      root.innerHTML = "";
      root.append(...domElements);
    }
  });

  return button;
};

export default nextQuestionButton;
