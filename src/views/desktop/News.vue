<template>
    <div>
        <Header :showInput="false" :showMenu="false" :showBurgerMenu="true" />
        <ButtonBack route="desktop" />
        <div class="container">
            <Slider />
            <div class="news-blog">
                <NewsItem
                    v-for="item in news"
                    :key="item.id"
                    :item="item"
                    @click.native="clickNews(item.id)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";
import Slider from "@/components/desktop/Slider";
import NewsItem from "@/components/desktop/NewsItem";
import ButtonBack from "@/components/desktop/btn/ButtonBack";

import image1 from "@/../public/img/img1.png";
import image2 from "@/../public/img/img2.png";

const News = {
    name: "News",
    components: {
        Slider,
        NewsItem,
        ButtonBack,
        Header,
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
        clickNews(index) {
            this.$router.push({
                name: "newsId",
                params: {
                    id: index,
                },
            });
        },
    },
};
export default News;
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
    position: relative;
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
