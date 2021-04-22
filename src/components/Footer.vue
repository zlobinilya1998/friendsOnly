<template>
  <footer class="footer">
    <ul class="footer__ul">
      <li v-for="link in links" :key="link">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
    <ul class="footer__ul second">
      <li v-for="link in linksSecond" :key="link">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        "Как это работает?",
        "Вакансии",
        "Партнерская программа",
        "Перевод",
        "Помощь",
        "Юр. информация",
        "Блог",
      ],
      linksSecond: ["2020 Looplab LTD.", "Русский"],
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  height: 114px;
  width: 940px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 13px 13px 0px 0px;
}
.footer__ul {
  width: 721px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.footer__ul.second {
  margin-top: 20px;
  width: 260px;
}
.footer__ul,
.footer__ul.second > li {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "liga" off;
  opacity: 0.5;
}
</style>
