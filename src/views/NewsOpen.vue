<template>
  <div class="containerOuter">
    <div class="container">
      <ButtonBack route="/desktop/news" />
      <NewsItem :item="news[0]" />
    </div>
    <LikeBar />
  </div>
</template>

<script>
import LikeBar from "../components/LikeBar.vue";
import NewsItem from "../components/NewsItem.vue";
import ButtonBack from "../components/btn/ButtonBack.vue";

import image1 from "../../public/img/img1.png";

const NewsOpen = {
  name: "NewsOpen",
  components: {
    NewsItem,
    LikeBar,
    ButtonBack,
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
      ],
    };
  },
};
export default NewsOpen;
</script>

<style scoped>
.containerOuter {
  align-items: flex-start;
  display: flex;
  width: 940px;
  margin: 0 auto;
}
.container {
  position: relative;
  width: 700px;
  margin: 0 auto;
  background: #ffffff;
}
.item {
  width: 100%;
  min-height: 439px;
  margin-top: 0px;
  border-radius: 0px;
}
.like-bar {
  margin-top: 25px;
}
</style>
