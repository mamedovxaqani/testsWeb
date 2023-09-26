import steps from "../fields/steps";

function Header(length, questionLength) {
  const header = document.createElement("header");
  header.classList.add("header", "pb-5");

  header.append(steps(length, questionLength));

  return header;
}

export default Header;
