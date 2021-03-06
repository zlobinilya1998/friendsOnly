import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//desktop
const Work = () => import("@/views/desktop/Work.vue");
const News = () => import("@/views/desktop/News.vue");
const NewsOpen = () => import("@/views/desktop/NewsOpen.vue");
const ProfileAnalyticsDesktop = () => import("@/views/desktop/ProfileAnalytics.vue");
const DatePicker = () => import("@/views/desktop/DatePicker.vue");

//mobile
const Vacancy = () => import("@/views/mobile/Vacancy.vue");
const MobileNews = () => import("@/views/mobile/News.vue");
const MobileNewsOpen = () => import("@/views/mobile/NewsOpen.vue");
const Comments = () => import("@/views/mobile/Comments.vue");
const ProfileAnalytics = () => import("@/views/mobile/ProfileAnalytics.vue");
const DatePickerMobile = () => import("@/views/mobile/DatePicker");

const routes = [
    //Desktop
    { path: "/", redirect: "/desktop/work" },
    { path: "/desktop", redirect: "/desktop/work" },
    {
        path: "/desktop/work",
        meta: {
            layout: "desktop",
        },
        component: Work,
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
        path: "/desktop/profile/analytics",
        meta: {
            layout: "desktop",
        },
        component: ProfileAnalyticsDesktop,
    },
    {
        path: "/desktop/date",
        meta: {
            layout: "empty-desktop",
        },
        component: DatePicker,
    },

    //Mobile
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
    },
    {
        name: "Post",
        path: "/mobile/news/:id",
        meta: {
            layout: "news",
        },
        component: MobileNewsOpen,
    },
    { path: "/mobile/comments", meta: { layout: "news" }, component: Comments },
    {
        path: "/mobile/profile",
        meta: { layout: "empty" },
    },
    { path: "/mobile/profile/analytics", meta: { layout: "empty" }, component: ProfileAnalytics },
    { path: "/mobile/date", meta: { layout: "empty" }, component: DatePickerMobile },
];
const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
