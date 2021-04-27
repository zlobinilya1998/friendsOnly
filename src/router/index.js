import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//desktop
const Main = () => import("../components/desktop/Main.vue");
const News = () => import("../views/desktop/News.vue");
const NewsOpen = () => import("../views/desktop/NewsOpen.vue");

//mobile
const Vacancy = () => import("../views/mobile/Vacancy.vue");
const MobileNews = () => import("../views/mobile/News.vue");
const MobileNewsOpen = () => import("../views/mobile/NewsOpen.vue");

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
    { path: "/mobile/newsOpen", meta: { layout: "mobile" }, component: MobileNewsOpen },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
