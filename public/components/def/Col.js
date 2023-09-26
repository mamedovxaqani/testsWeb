const Col = (size, count) => {
  const col = document.createElement("div");
  if (size && count) {
    col.classList.add(`col-${size}-${count}`);
  } else {
    col.classList.add("col");
  }

  return col;
};

export default Col;
