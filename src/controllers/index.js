import Products from "./products.controller";
import Contact from "./contact.controller";
import NotFound from "./error.controller";
import Cart from "./cart.controller";

const pages = {
  products: Products,
  contact: Contact,
  cart: Cart,
  notFound: NotFound,
};

export { pages };
