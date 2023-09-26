function generateCurrentQuestion(data) {
  return data.map((element) => {
    element.incorrect_answers.push(element.correct_answer);
    return { title: element.question, answers: element.incorrect_answers };
  });
}

export default generateCurrentQuestion;
