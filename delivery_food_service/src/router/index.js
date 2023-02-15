import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Cart from "../views/Cart.vue";
import Order from "../views/Order.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/shop/:shopId",
    component: Shop,
    props: true,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/order",
    component: Order,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
