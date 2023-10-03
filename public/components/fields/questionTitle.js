import convertTitle from "../../helpers/converTitle";
import addedAttibutes from "../../helpers/addedAttibutes";

function questionTitle(title) {
  const h2 = document.createElement("h2");

  // const newTitleArray = `Which Pokémon and it's evolutions were banned from appearing in a main role after the Episode 38 Incident?`;
  const convertedTitle = convertTitle(title);

  h2.classList.add(
    "h3",
    "fw-bold",
    "block-title",
    "animate__animated",
    "animate__fadeInLeft"
  );
  h2.innerHTML = convertedTitle;
  addedAttibutes(h2, title);

  return h2;
}

export default questionTitle;
