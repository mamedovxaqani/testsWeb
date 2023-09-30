import { default_answers } from "../../data/answers";
import defContainer from "../def/defContainer";

export function showAnswers(answers) {
  const inc_answers = default_answers.map((element) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = element;
    tr.classList.add("text-danger");
    tr.append(td);
    return tr;
  });

  const corr_answer = answers.map((element) => {
    const tr = document.createElement("tr");
    tr.classList.add("text-success");
    const td = document.createElement("td");
    td.innerHTML = element;
    tr.append(td);
    return tr;
  });

  const allAnswers = [...corr_answer, ...inc_answers];

  const caption = document.createElement("caption");
  caption.innerHTML = `Correct answers: ${answers.length}/${allAnswers.length}`;
  const button = document.createElement("button");
  button.innerHTML = "Reload page";
  button.classList.add("reload-button");
  button.addEventListener("click", () => {
    location.reload();
  });
  const table = document.createElement("table");
  table.classList.add("table", "text-center");

  const container = defContainer();

  const tHead = document.createElement("thead");
  tHead.classList.add("p-2");
  const thOne = document.createElement("th");

  thOne.append("answer");

  tHead.append(thOne);

  const tBody = document.createElement("tbody");

  const trAnswers = allAnswers.map((element) => {
    const tr = document.createElement("tr");
    if (element.answer === element.correct_answer) {
      tr.classList.add("table-success");
    }
    const tdOne = document.createElement("td");
    tdOne.append(element);

    tr.append(tdOne);

    return tr;
  });

  tBody.append(...trAnswers);
  table.append(caption, tHead, tBody);
  container.append(table, button);

  return container;
}
