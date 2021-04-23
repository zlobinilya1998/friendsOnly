<template>
  <div class="news">
    <Slider />
    <NewsItem
      v-for="item of news"
      :key="item.id"
      :item="item"
      @click.native="clickNews(item.id)"
    />
  </div>
</template>

<script>
import Slider from "../components/Slider";
import NewsItem from "../components/NewsItem";

import image1 from "../assets/news/News1.png";

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
          background: image1,
          id: 2,
        },
        {
          date: "29 марта 2021",
          description:
            "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
          views: 120,
          like: 600,
          dislike: 400,
          background: image1,
          id: 3,
        },
      ],
    };
  },
  methods: {
    clickNews(index) {
      this.$router.push({
        name: "Post",
        params: {
          id: index,
        },
      });
    },
  },
};
</script>

<style scoped></style>
