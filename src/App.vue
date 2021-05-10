<template>
    <component :is="layout" />
</template>

<script>
import DesktopLayout from "./layouts/desktop/DesktopLayout.vue";
import MobileLayout from "./layouts/mobile/MobileLayout.vue";
import NewsLayout from "./layouts/mobile/NewsLayout.vue";
import EmptyLayout from "@/layouts/mobile/EmptyLayout.vue";
import EmptyDesktopLayout from "@/layouts/desktop/EmptyLayout.vue";

const App = {
    components: {
        DesktopLayout,
        MobileLayout,
        NewsLayout,
        EmptyLayout,
        EmptyDesktopLayout,
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || "desktop") + "-layout";
        },
    },
};
export default App;
</script>

<style>
@font-face {
    font-family: "Roboto";
    src: url("../public/font/Roboto-Medium.ttf");
}
@font-face {
    font-family: "SF Pro Display-Regular";
    src: url("../public/font/SFProDisplay-Regular.woff");
}
@font-face {
    font-family: "SF Pro Display-Semibold";
    src: url("../public/font/SFProDisplay-Semibold.woff");
}
@font-face {
    font-family: "SF Pro Display-Bold";
    src: url("../public/font/SFProDisplay-Bold.woff");
}
@font-face {
    font-family: "SF Pro Rounded-Regular";
    src: url("../public/font/SFProRounded-Regular.woff");
}
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    font-family: "SF Pro Display-Regular";
    color: hsla(240, 23%, 21%, 1);
    overflow-x: hidden;
}
button {
    cursor: pointer;
    border: none;
}
button:focus {
    outline: none;
}
ul {
    list-style: none;
}
a {
    color: inherit;
    text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}
p {
    margin: 0;
}
hr {
    margin: 15px 0px 20px 0px;
    position: absolute;
    left: 0;
    width: 100%;
    border: 1px solid black;
    opacity: 0.05;
}
input {
    border: none;
    font-family: "SF Pro Display-Regular";
}
input:focus {
    outline: none;
}
textarea {
    font-family: "SF Pro Display-Regular";
}
textarea:focus {
    outline: none;
}
img {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: cover;
}
.pageTotalLoad {
    width: 225px;
    opacity: 0.4;
    height: 100%;
    background: linear-gradient(
        to left,
        rgba(254, 255, 255, 0),
        rgba(255, 255, 255, 0.55),
        rgba(255, 255, 255, 1)
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    -webkit-animation: loadingPageAnimation infinite 1.5s;
    animation: loadingPageAnimation infinite 1.5s;
}
@keyframes loadingPageAnimation {
    0% {
        left: 0%;
    }
    100% {
        left: 100%;
    }
}
@keyframes rotation {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
