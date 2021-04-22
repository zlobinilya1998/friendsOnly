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
        <h3 class="about__title">
          О нас
          <svg
            width="19"
            height="19"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M0 22.54H22V0.54H0V22.54Z" fill="url(#pattern3)" />
            <defs>
              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image1" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image1"
                width="64"
                height="64"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </h3>
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
  display: flex;
  align-items: center;
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
  font-family: "SF Pro Display-Semibold";
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
  font-family: "SF Pro Display-Semibold";
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
