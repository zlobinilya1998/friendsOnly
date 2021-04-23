import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/desktop" },
  {
    path: "/desktop",
    meta: {
      layout: "desktop",
    },
  },
  {
    path: "/mobile",
    redirect: "/mobile/vacancy",
  },
  {
    path: "/mobile/vacancy",
    meta: {
      layout: "mobile",
    },
    component: () => import("../mobile/views/Vacancy.vue"),
  },
  {
    path: "/mobile/news",
    meta: {
      layout: "mobile",
    },
    component: () => import("../mobile/views/News.vue"),
  },
  {
    path: "/mobile/news/:id",
    meta: {
      layout: "mobile",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
