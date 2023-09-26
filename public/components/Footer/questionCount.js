const questionCount = (numberQuestion) => {
  const block = document.createElement("span");
  block.classList.add("block");
  const blocksArray = new Array(numberQuestion);
  blocksArray.fill(block, 0, numberQuestion);
  return blocksArray;
};

export default questionCount;
