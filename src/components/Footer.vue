<template>
  <footer class="footer">
    <ul class="footer__ul">
      <li v-for="link in links" :key="link">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
    <ul class="footer__ul second">
      <li>
        <a href="#">2020 Looplab LTD.</a>
      </li>
      <li>
        <svg
          class="flag"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path d="M0 14.98H14V0.98H0V14.98Z" fill="url(#pattern5)" />
          <defs>
            <pattern
              id="pattern5"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image5" transform="scale(0.015625)" />
            </pattern>
            <image
              id="image5"
              width="64"
              height="64"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
        <a href="#">Русский</a>
        <svg
          class="arrow"
          width="7"
          height="4"
          viewBox="0 0 7 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M3.8019 0.187352C3.83535 0.219754 3.86356 0.254887 3.88809 0.29184L6.45107 2.76585C6.70099 3.0072 6.70022 3.39792 6.44895 3.63833C6.1978 3.87873 5.79135 3.87787 5.54106 3.6364L3.3337 1.50577L1.10503 3.63798C0.853884 3.87839 0.447552 3.87753 0.197149 3.63606C0.0718876 3.51527 0.00971931 3.35714 0.0100806 3.19948C0.0104418 3.04183 0.0733345 2.88385 0.199148 2.7637L2.78536 0.289506C2.81005 0.252657 2.83842 0.217416 2.87202 0.185385C3.00045 0.0625013 3.1694 0.00345193 3.33737 0.00677774C3.50535 0.00416288 3.67391 0.0639264 3.8019 0.187352Z"
            fill="#292941"
          />
        </svg>
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
.footer__ul > li,
.footer__ul.second > li {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "liga" off;
  cursor: pointer;
}
.footer__ul > li > a,
.footer__ul.second > li > a {
  opacity: 0.5;
}
.flag {
  margin-right: 5px;
}
.arrow {
  margin-left: 10px;
}
</style>
