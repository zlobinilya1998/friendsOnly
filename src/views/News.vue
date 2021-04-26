<template>
  <div class="container">
    <Slider />
    <div class="news-blog">
      <NewsItem v-for="item in news" :key="item.id" :item="item" />
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
};
</script>

<style scoped>
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
