import image from "../../images/side.png";

const sideImage = () => {
  const sideImage = new Image();
  sideImage.classList.add("side-img");
  sideImage.setAttribute("src", image);
  return sideImage;
};

export default sideImage;
