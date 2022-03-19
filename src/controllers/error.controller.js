import NotFound from "../views/error.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = NotFound;

  return divElement;
};
