import { correct_answers, incorrect_answers } from "../data/answers";
function answersQuestion(answer, correct_answer) {
  const thisQuestion = { answer, correct_answer };

  if (answer === correct_answer && !correct_answers.includes(answer)) {
    correct_answers.push(thisQuestion);
  } else if (answer !== correct_answer) {
    incorrect_answers.push(thisQuestion);
  }
}

export { answersQuestion };
