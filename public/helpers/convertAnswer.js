function converAnswer(answer) {
  const answerArray = answer.split(" ");
  if (answerArray.length > 3) {
    answerArray.length = 3;
    answerArray.push("...");
    return answerArray.join(" ");
  }
  return answer;
}

export default converAnswer;
