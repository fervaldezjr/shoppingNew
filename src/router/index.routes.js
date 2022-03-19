import { pages } from "../controllers/index";
let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";

  switch (route) {
    case "#/": {
      return content.appendChild(pages.products());
    }
    case "#/contact": {
      return content.appendChild(pages.contact());
    }
    case "#/cart": {
      return content.appendChild(pages.cart());
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }
};

export { router };
