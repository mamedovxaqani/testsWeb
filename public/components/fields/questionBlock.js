import questionAnswer from "../Test/questionAnswer";

const questionBlock = (answers) => {
  const blockQuestion = document.createElement("div");

  blockQuestion.classList.add("block-question");

  blockQuestion.append(questionAnswer(answers));

  return blockQuestion;
};

export default questionBlock;
