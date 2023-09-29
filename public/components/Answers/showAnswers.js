// import { answers } from "../../data/answers";
import defContainer from "../def/defContainer";

export function showAnswers(answers) {
  const button = document.createElement("button");
  button.innerHTML = "Reload page";
  button.classList.add("reload-button");
  button.addEventListener("click", () => {
    location.reload();
  });
  const table = document.createElement("table");
  table.classList.add("table", "table-danger", "text-center");

  const container = defContainer();

  const tHead = document.createElement("thead");
  tHead.classList.add("p-2");
  const thOne = document.createElement("th");
  const thTwo = document.createElement("th");

  thOne.append("answer");
  thTwo.append("correct answer");

  tHead.append(thOne, thTwo);

  const tBody = document.createElement("tbody");

  const trAnswers = answers.map((element) => {
    const tr = document.createElement("tr");
    const tdOne = document.createElement("td");
    tdOne.append(element.answer);
    const tdTwo = document.createElement("td");
    tdTwo.append(element.correct_answer);

    tr.append(tdOne, tdTwo);

    return tr;
  });

  tBody.append(...trAnswers);
  table.append(tHead, tBody);
  container.append(table, button);

  return container;
}
