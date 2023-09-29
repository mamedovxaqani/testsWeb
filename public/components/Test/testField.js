import Container from "../def/defContainer";
import Row from "../def/Row";
import Col from "../def/Col";
import questionBlock from "../fields/questionBlock";
import questionTitle from "../fields/questionTitle";
import getQuestion from "./getQuestions";
import nextQuestionButton from "../Footer/nextQuestionButton";

import sideImage from "./sideImage";

function testField(data) {
  console.log(data);
  const testSection = document.createElement("section");
  const container = Container();
  const row = Row();
  const colOne = Col("xl", 6);
  const colTwo = Col("xl", 6);
  colOne.append(sideImage());

  colTwo.append(
    questionTitle(data.title),
    questionBlock(data.answers, data.correct_answer)
  );

  row.append(colOne, colTwo);
  container.append(row);

  testSection.classList.add("testField");

  testSection.append(container);

  return testSection;
}

export default testField;
