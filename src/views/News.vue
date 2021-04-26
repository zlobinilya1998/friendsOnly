<template>
  <div>
    <div class="btn" @click="backToMain">
      <svg
        width="5"
        height="9"
        viewBox="0 0 5 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.97949 8.82102L0.175092 4.9321C-0.0583645 4.69346 -0.0583645 4.30654 0.175092 4.0679L3.97949 0.178982C4.21294 -0.059661 4.59145 -0.0596609 4.82491 0.178982C5.05836 0.417625 5.05836 0.804543 4.82491 1.04319L1.44322 4.5L4.82491 7.95681C5.05836 8.19546 5.05836 8.58237 4.82491 8.82102C4.59145 9.05966 4.21294 9.05966 3.97949 8.82102Z"
          fill="#292941"
          fill-opacity="0.5"
        />
      </svg>
      Назад
    </div>

    <div class="container">
      <Slider />
      <div class="news-blog">
        <NewsItem v-for="item in news" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider";

import NewsItem from "../components/NewsItem";
import image1 from "../assets/news/img1.png";
import image2 from "../assets/news/img2.png";

export default {
  name: "News",
  components: {
    Slider,
    NewsItem,
  },
  data() {
    return {
      news: [
        {
          date: "29 марта 2021",
          description:
            "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
          views: 120,
          like: 600,
          dislike: 400,
          background: image1,
          id: 1,
        },
        {
          date: "29 марта 2021",
          description:
            "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
          views: 120,
          like: 600,
          dislike: 400,
          background: image2,
          id: 2,
        },
        {
          date: "29 марта 2021",
          description:
            "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
          views: 120,
          like: 600,
          dislike: 400,
          background: image2,
          id: 3,
        },
        {
          date: "29 марта 2021",
          description:
            "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
          views: 120,
          like: 600,
          dislike: 400,
          background: image1,
          id: 4,
        },
      ],
    };
  },
  methods: {
    backToMain() {
      this.$router.push("/desktop");
    },
  },
};
</script>

<style scoped>
.btn {
  position: absolute;
  top: 95px;
  left: 27px;
  width: 61px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.container {
  width: 940px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 0px 0px 13px 13px;
  padding: 0px 20px 30px 20px;
  margin-top: 1px;
  margin-bottom: 60px;
}
.news-blog {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
