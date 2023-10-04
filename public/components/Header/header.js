import steps from "../fields/steps";

let counter = 0;
function Header(length, questionLength) {
  const header = document.createElement("header");
  header.classList.add("header", "pb-5");

  counter++;
  header.append(steps(counter, questionLength));

  return header;
}

export default Header;
