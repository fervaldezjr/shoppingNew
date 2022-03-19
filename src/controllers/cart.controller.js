import Cart from "../views/cart.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = Cart;

  return divElement;
};
