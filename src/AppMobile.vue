<template>
  <div class="root">
    <header class="header">
      <svg
        class="header__logo"
        width="41"
        height="31"
        viewBox="0 0 41 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M2.34308 14.3655C15.6583 -1.42675 28.3683 0.911248 38.6574 14.9504C33.0085 23.7243 17.8372 35.8906 2.34308 14.3655Z"
            fill="#469BFC"
          />
          <path
            d="M39.583 14.1551C39.2377 13.6707 31.0092 2.29626 20.4999 2.29626C9.99068 2.29626 1.76182 13.6707 1.41685 14.1546C1.08977 14.6141 1.08977 15.2373 1.41685 15.6967C1.76182 16.181 9.99068 27.5555 20.4999 27.5555C31.0092 27.5555 39.2377 16.181 39.583 15.6971C39.9106 15.2377 39.9106 14.6141 39.583 14.1551ZM20.4999 24.9425C12.7587 24.9425 6.05406 17.393 4.06932 14.925C6.05149 12.4548 12.7421 4.90928 20.4999 4.90928C28.2408 4.90928 34.945 12.4574 36.9306 14.9268C34.9484 17.3969 28.2577 24.9425 20.4999 24.9425Z"
            fill="#8EC3FF"
          />
          <g clip-path="url(#clip1)">
            <path
              d="M23.9772 14.0452H23.7718V13.2075C23.7718 11.6582 22.3606 10.364 20.5968 10.3364C20.5486 10.3356 20.4523 10.3356 20.4041 10.3364C18.6402 10.364 17.229 11.6582 17.229 13.2075V14.0452H17.0236C16.707 14.0452 16.4488 14.3298 16.4488 14.6813V18.8826C16.4488 19.2337 16.707 19.521 17.0236 19.521H23.9772C24.2938 19.521 24.5521 19.2337 24.5521 18.8826V14.6813C24.5521 14.3298 24.2938 14.0452 23.9772 14.0452ZM21.1519 16.7777V18.0472C21.1519 18.1925 21.0122 18.3156 20.8452 18.3156H20.1557C19.9887 18.3156 19.849 18.1925 19.849 18.0472V16.7777C19.687 16.6388 19.5927 16.4467 19.5927 16.2343C19.5927 15.8317 19.9499 15.4858 20.4041 15.4698C20.4522 15.4681 20.5487 15.4681 20.5968 15.4698C21.051 15.4858 21.4082 15.8317 21.4082 16.2343C21.4081 16.4467 21.3138 16.6388 21.1519 16.7777ZM22.4178 14.0452H20.5968H20.4041H18.5831V13.2075C18.5831 12.2846 19.4439 11.5215 20.5004 11.5215C21.5569 11.5215 22.4178 12.2846 22.4178 13.2075V14.0452H22.4178Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="41" height="31" fill="white" />
          </clipPath>
          <clipPath id="clip1">
            <rect
              width="10.5429"
              height="9.18519"
              fill="white"
              transform="translate(15.2293 10.3358)"
            />
          </clipPath>
        </defs>
      </svg>
      <p class="header__text">FRIENDSONLY <span>WORK</span></p>
    </header>
    <div class="container">
      <div class="about">
        <h3 class="about__title">О нас</h3>
        <hr />
        <section class="about__wrapper">
          <p class="about__text">
            Команда FriendsОnly создана небольшой группой специалистов, которые
            любят своё дело и всегда заряжены на результат.
          </p>
          <p class="about__text">
            Если вы хотите присоединиться к команде FriendsOnly, ознакомьтесь с
            актуальными вакансиями ниже.
          </p>
        </section>
      </div>

      <div class="vacancy">
        <div v-for="(card, index) of cards" :key="index" class="card">
          <h3 class="card__title">{{ card.title }}</h3>
          <hr />
          <section class="card__responsibilities">
            <h4 class="card__responsibilities__title">
              Обязанности
            </h4>
            <p class="card__responsibilities__text">
              {{ card.responsibilities }}
            </p>
          </section>
          <section class="card__qualification">
            <h4 class="card__qualification__title">
              Предпочтительная квалификация
            </h4>
            <p class="card__qualification__text">
              {{ card.qualification }}
            </p>
          </section>
          <button class="card__btn">Отклинуться на вакансию</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMobile",
  data() {
    return {
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
      ],
    };
  },
};
</script>

<style scoped>
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
  min-height: 100vh;
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
hr {
  margin: 15px 0px 20px 0px;
  position: absolute;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0);
  opacity: 0.1;
}
p {
  margin: 0;
}
.container {
  max-width: 329px;
  margin: 30px auto;
}
.header {
  display: flex;
  align-items: center;
  padding: 18px 0px 18px 24px;
  background: #ffffff;
}
.header__text {
  margin-left: 7px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
.header__text > span {
  font-weight: 500;

  opacity: 0.4;
}
.about {
  padding: 20px 20px 20px 18px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
}
.about__wrapper {
  height: 147px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.about__title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}
.about__text {
  opacity: 0.5;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 165%;
}
.card {
  position: relative;
  margin-top: 15px;
  padding: 20px 20px 20px 18px;
  background: #ffffff;
  border-radius: 8px;
}
.card__title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}
.card__responsibilities__title {
  margin: 30px 0px 5px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 165%;
}
.card__responsibilities__text {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 165%;
  opacity: 0.5;
}
.card__qualification__title {
  margin: 15px 0px 5px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 165%;
}
.card__qualification__text {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 165%;
  opacity: 0.5;
}
.card__btn {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffff;
  background: #469bfc;
  border-radius: 8px;
}
</style>
