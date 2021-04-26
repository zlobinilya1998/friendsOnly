<template>
    <div>
        <Slider />
        <div class="container">
            <div class="news">
                <NewsItem
                    v-for="item of news"
                    :key="item.id"
                    :item="item"
                    @click.native="clickNews(item.id)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import NewsItem from "../components/NewsItem";
import Slider from "../components/Slider";

import image1 from "../../../public/img/News1.png";

export default {
    name: "News",
    components: {
        NewsItem,
        Slider,
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
    computed: {
        showSlider() {
            return this.$route.fullPath == "/mobile/news";
        },
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

<style scoped>
.container {
    padding: 0 23px;
    max-width: 600px;
    margin: 0 auto;
}
</style>
