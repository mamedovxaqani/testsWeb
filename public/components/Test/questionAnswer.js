const questionAnswer = (answers) => {
  const ulAnswer = document.createElement("ul");
  ulAnswer.classList.add("list-group", "text-center");
  const liAnswer = answers.map((element) => {
    const li = document.createElement("li");
    li.classList.add("custom-li-item");
    li.classList.add(
      "list-group-item",
      "text-bold",
      "border",
      "rounded",
      "mt-2",
      "py-4"
    );

    li.innerHTML = element;
    return li;
  });

  ulAnswer.append(...liAnswer);

  ulAnswer.addEventListener("click", (event) => {
    if (event.target.tagName === "UL") {
      return;
    }
    event.target.classList.toggle("clicked-item");
  });
  return ulAnswer;
};

export default questionAnswer;
