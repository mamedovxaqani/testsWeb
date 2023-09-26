import Header from "../Header/header";
import Test from "../Test/Test";
import Footer from "./Footer";

const nextQuestionButton = (questions, root, qlength) => {
  const button = document.createElement("button");
  button.innerHTML = "Next Question";
  button.classList.add("next-button");

  button.addEventListener("click", () => {
    console.log(questions);
    if (!questions.length) {
      alert("Вопросы закончились");
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
