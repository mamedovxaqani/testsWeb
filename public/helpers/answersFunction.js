import { correct, incorrect } from "./var_answers";

function answersQuestion(answer, correct_answer) {
  if (answer === correct_answer) {
    correct(answer);
  } else {
    incorrect(correct_answer);
  }
}

export { answersQuestion };
