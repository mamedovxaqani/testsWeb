import questionAnswer from "../Test/questionAnswer";

const questionBlock = (answers, correct_answer) => {
  const blockQuestion = document.createElement("div");

  blockQuestion.classList.add("block-question");

  blockQuestion.append(questionAnswer(answers, correct_answer));

  return blockQuestion;
};

export default questionBlock;
