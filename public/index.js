import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

import Header from "./components/Header/header.js";
import Test from "./components/Test/Test";
import Footer from "./components/Footer/Footer";
import getQuestion from "./components/Test/getQuestions";
import generateCurrentQuestion from "./helpers/generateCurrentQuestion";

document.addEventListener("DOMContentLoaded", () => {
  const question = getQuestion();
  question.then((data) => {
    const questions = generateCurrentQuestion(data);
    const questionsLength = data.length;
    const root = document.querySelector("#root");
    const domElements = [
      Header(questions.length, questionsLength),
      Test(questions.pop()),
      Footer(questions, root, questionsLength),
    ];
    root.append(...domElements);
  });
});
