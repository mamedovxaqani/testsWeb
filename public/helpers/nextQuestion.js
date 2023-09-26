import { currentQuestion } from "../data/question";

function nextQuestion(question) {
  currentQuestion.title = question.title;
  currentQuestion.answers = question.answers;
}

export { nextQuestion };
