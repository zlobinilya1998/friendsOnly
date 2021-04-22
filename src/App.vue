<template>
  <div class="root">
    <Header />
    <Main :cards="cards" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
  },
  data: () => ({
    cards: [
      {
        title: "C/C++ Software Engineer",
        responsibilities:
          "работа над специально созданными низкоуровневыми системами хранения данных Telegram, распределенными по нескольким дата-центрам.",
        qualification:
          "опыт работы над масштабируемыми проектами C/C++ и/или сетевыми протоколами, опыт работы с Linux, лучшие результаты в соревнованиях по программированию.",
      },
      {
        title: "C/C++ Software Engineer",
        responsibilities:
          "работа над специально созданными низкоуровневыми системами хранения данных Telegram, распределенными по нескольким дата-центрам.",
        qualification:
          "опыт работы над масштабируемыми проектами C/C++ и/или сетевыми протоколами, опыт работы с Linux, лучшие результаты в соревнованиях по программированию.",
      },
      {
        title: "C/C++ Software Engineer",
        responsibilities:
          "работа над специально созданными низкоуровневыми системами хранения данных Telegram, распределенными по нескольким дата-центрам.",
        qualification:
          "опыт работы над масштабируемыми проектами C/C++ и/или сетевыми протоколами, опыт работы с Linux, лучшие результаты в соревнованиях по программированию.",
      },
      {
        title: "C/C++ Software Engineer",
        responsibilities:
          "работа над специально созданными низкоуровневыми системами хранения данных Telegram, распределенными по нескольким дата-центрам.",
        qualification:
          "опыт работы над масштабируемыми проектами C/C++ и/или сетевыми протоколами, опыт работы с Linux, лучшие результаты в соревнованиях по программированию.",
      },
    ],
  }),
};
</script>

<style>
@font-face {
  font-family: "SF Pro Display-Regular";
  src: url("./assets/fonts/SFProDisplay-Regular.woff");
}
@font-face {
  font-family: "SF Pro Display-Semibold";
  src: url("./assets/fonts/SFProDisplay-Semibold.woff");
}
@font-face {
  font-family: "SF Pro Display-Bold";
  src: url("./assets/fonts/SFProDisplay-Bold.woff");
}
@font-face {
  font-family: "SF Pro Rounded-Regular";
  src: url("./assets/fonts/SFProRounded-Regular.woff");
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background: #e5e5e5;
  font-family: "SF Pro Display-Regular";
}
button {
  cursor: pointer;
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
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0);
  opacity: 0.1;
}
</style>
