import Contact from "../views/contact.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = Contact;

  return divElement;
};
