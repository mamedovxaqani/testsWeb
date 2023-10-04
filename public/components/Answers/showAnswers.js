import { default_answers } from "../../data/answers";
import defContainer from "../def/defContainer";

export function showAnswers(answers) {
  const def_answers = Array.from(new Set(default_answers));
  console.log(def_answers);
  const inc_answers = def_answers.map((element) => {
    if (answers.includes(element)) {
      return;
    }
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
  console.log(allAnswers);
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
    const tdOne = document.createElement("td");
    tdOne.classList.add("text-center");
    tdOne.append(element);

    tr.append(tdOne);

    return tr;
  });

  tBody.append(...trAnswers);
  table.append(caption, tHead, tBody);
  container.append(table, button);

  return container;
}
