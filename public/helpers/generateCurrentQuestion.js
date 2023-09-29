import Question from "../data/class/Question";

function generateCurrentQuestion(data) {
  return data.map((element) => {
    element.incorrect_answers.push(element.correct_answer);
    return new Question(
      element.question,
      element.incorrect_answers,
      element.correct_answer
    );
  });
}

export default generateCurrentQuestion;
