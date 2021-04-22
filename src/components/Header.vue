<template>
  <header class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <img class="header__container__logo__img" :src="svg.logo" />
        <p class="header__container__logo__text">
          FRIENDSONLY <span>WORK</span>
        </p>
      </div>
      <div class="header__container__input__wrapper">
        <input class="header__container__input" placeholder="Поиск аккаунтов" />
        <img class="header__container__input__img" :src="svg.input" />
      </div>
      <ul class="header__container__menu">
        <li v-for="img in svg.menu" :key="img">
          <a href="#">
            <img :src="img" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import logo from "../assets/svg/logo.svg";
import input from "../assets/svg/input.svg";
import video from "../assets/svg/menu/video.svg";
import home from "../assets/svg/menu/home.svg";
import messasge from "../assets/svg/menu/message.svg";
import profile from "../assets/svg/menu/profile.svg";

export default {
  name: "Header",
  data() {
    return {
      svg: {
        logo,
        input,
        menu: {
          video,
          home,
          messasge,
          profile,
        },
      },
    };
  },
};
</script>

<style scoped>
.header {
  height: 71px;
  background: #ffffff;
}
.header__container {
  max-width: 940px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__container__logo {
  display: flex;
  align-items: center;
}
.header__container__logo__text {
  margin-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
}
.header__container__logo__text > span {
  margin-left: 5px;
  opacity: 0.4;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.header__container__input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 46px;
}
.header__container__input {
  flex: 1;
  background: #f5f5f5;
  border-radius: 13px;
  border: none;
  padding: 15px 17px 14px 21px;
}
.header__container__input:focus {
  outline: none;
}
.header__container__input__img {
  position: absolute;
  right: 15px;
}
.header__container__menu {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 267px;
}
</style>
