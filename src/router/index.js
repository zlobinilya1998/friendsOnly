import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Main = () => import("../components/Main.vue");
const News = () => import("../views/News.vue");
const NewsOpen = () => import("../views/NewsOpen.vue");
const Vacancy = () => import("../mobile/views/Vacancy.vue");

const MobileNews = () => import("../mobile/views/News.vue");

const routes = [
  { path: "/", redirect: "/desktop" },
  {
    path: "/desktop",
    meta: {
      layout: "desktop",
    },
    component: Main,
  },
  {
    path: "/desktop/news",
    meta: {
      layout: "desktop",
    },
    component: News,
  },
  {
    name: "newsId",
    path: "/desktop/news/:id",
    meta: {
      layout: "desktop",
    },
    component: NewsOpen,
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
    component: Vacancy,
  },
  {
    path: "/mobile/news",
    meta: {
      layout: "mobile",
    },
    component: MobileNews,
    children: [
      {
        name: "Post",
        path: ":id",
        meta: {
          layout: "news",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
