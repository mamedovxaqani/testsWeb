import { correct_answers, default_answers } from "../data/answers";

function correct(answer) {
  if (!correct_answers.includes(answer)) {
    correct_answers.push(answer);
  } else {
    return;
  }
}

function incorrect(correct_answer) {
  if (default_answers.includes(correct_answer)) {
    return;
  }
  if (
    !default_answers.includes(correct_answer) &&
    !correct_answers.includes(correct_answer)
  ) {
    default_answers.push(correct_answer);
  }
}

export { correct, incorrect };
