import products from "../views/products.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = products;

  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("click!");
  });

  return divElement;
};
