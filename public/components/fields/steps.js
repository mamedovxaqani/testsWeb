const steps = (length, questionLength) => {
  const stepsDiv = document.createElement("div");
  const stepsInner = document.createElement("div");
  stepsDiv.classList.add("steps__field");
  stepsInner.classList.add("steps__field-inner");

  stepsInner.innerHTML = `Question ${length}/${questionLength}`;

  stepsDiv.append(stepsInner);
  return stepsDiv;
};

export default steps;
