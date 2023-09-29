import { answers } from "../data/answers";
function answersQuestion(answer, correct_answer) {
  let thisAnswer = {
    id: Math.floor(Math.random() * 100),
    answer,
    correct_answer,
  };

  if (!answers.includes(thisAnswer.id)) {
    answers.push(thisAnswer);
  } else {
    return;
  }
}

export { answersQuestion };
