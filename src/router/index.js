import Vue from "vue";
import VueRouter from "vue-router";

import App from "../App";
import AppMobile from "../AppMobile";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/desktop" },
  { path: "/desktop", component: App },
  { path: "/mobile", component: AppMobile },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
