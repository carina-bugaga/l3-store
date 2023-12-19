import "./icons";
import Router from "./router";
import { cartService } from "./services/cart.service";
import { userService } from "./services/user.service";

async function init() {
  await userService.init();
  new Router().route();
  cartService.init();
}

init();

setTimeout(() => {
  document.body.classList.add("is__ready");
}, 250);
