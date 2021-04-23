<template>
  <div class="root">
    <Header />
    <Main :cards="cards" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default {
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

<style></style>
