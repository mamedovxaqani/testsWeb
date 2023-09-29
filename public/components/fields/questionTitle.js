function questionTitle(title) {
  const h2 = document.createElement("h2");

  h2.classList.add(
    "h3",
    "fw-bold",
    "block-title",
    "animate__animated",
    "animate__fadeInLeft"
  );
  h2.innerHTML = title;

  return h2;
}

export default questionTitle;
