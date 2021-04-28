<template>
    <div>
        <div class="wrapper">
            <div class="slider">
                <div
                    v-for="(btn, index) of sliderBtn"
                    :key="index"
                    :style="{
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.535677) 0%, rgba(0, 0, 0, 0.85) 100%)`,
                    }"
                    :class="`slider-item ${activeBtn == index ? 'active' : ''}`"
                    v-on:click="activeBtn = index"
                >
                    {{ btn }}
                </div>
            </div>
        </div>
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
import NewsItem from "../../components/mobile/NewsItem";

import image1 from "../../../public/img/img1.png";

const News = {
    name: "News",
    components: {
        NewsItem,
    },
    data: () => ({
        activeBtn: 0,
        sliderBtn: ["Все", "Для создателей", "Для друзей", "Обновления"],
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
    }),

    computed: {
        showSlider() {
            return this.$route.fullPath === "/mobile/news";
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
export default News;
</script>

<style scoped>
.slider {
    padding: 0px 23px;
    height: 71px;
    overflow-x: scroll;
    background: transparent;
    display: flex;
    align-items: center;
    position: relative;
}

.slider::-webkit-scrollbar {
    width: 0;
}

.slider-item {
    height: 41px;
    cursor: pointer;
    padding: 12px 15px 13px;
    border-radius: 50px;
    font-family: "Roboto";
    flex: none;
    align-items: center;
    color: #ffffff;
    transition: all 0.5s ease;
    position: relative;
}
.slider-item:nth-child(n + 2) {
    margin-left: 8px;
}
.slider-item:last-child:after {
    content: "";
    width: 23px;
    height: 1px;
    position: absolute;
    left: 100%;
    top: 0px;
}
.slider-item.active {
    background: #469bfc !important;
}
.container {
    padding: 0 23px;
    max-width: 600px;
    margin: 0 auto;
}
</style>
