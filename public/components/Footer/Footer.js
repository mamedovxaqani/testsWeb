import nextQuestionButton from "./nextQuestionButton";
import defContainer from "../def/defContainer";
import Row from "../def/Row";
import Col from "../def/Col";

const Footer = (questions, root, qlength) => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  // const colOne = Col("xl", 6);
  const colTwo = Col("xl", 6);
  const container = defContainer();
  const row = Row();
  colTwo.classList.add(
    "d-flex",
    "justify-content-xl-end",
    "justify-content-center"
  );
  row.append(colTwo);

  colTwo.append(nextQuestionButton(questions, root, qlength));

  container.append(row);

  footer.append(container);

  return footer;
};

export default Footer;
