<template>
    <div>
        <div class="slider">
            <div
                v-for="(value, name) in testData"
                :key="name"
                :style="{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),url(${
                        testData[name][testData[name].length - 1].background
                    })`,
                }"
                :class="`slider-item ${activeBtn == name ? 'active' : ''}`"
                v-on:click="activeBtn = name"
            >
                {{ name }}
            </div>
        </div>
        <div class="container">
            <transition-group name="list" tag="div" class="news">
                <NewsItem
                    v-for="item of selectedNews"
                    :key="item.id"
                    :item="item"
                    @click.native="clickNews(item.id)"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>
import NewsItem from "../../components/mobile/NewsItem";

import image1 from "@/../public/img/img1.png";
import image2 from "@/../public/img/img2.png";

const News = {
    name: "News",
    components: {
        NewsItem,
    },
    data: () => ({
        activeBtn: "Все",
        testData: {
            Все: [
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
                    like: 200,
                    dislike: 400,
                    background: image2,
                    id: 3,
                },
                {
                    date: "29 марта 2021",
                    description:
                        "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
                    views: 120,
                    like: 150,
                    dislike: 400,
                    background: image1,
                    id: 4,
                },
            ],
            "Для друзей": [
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
            "Для создателей": [
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
            ],
            Обновления: [
                {
                    date: "29 марта 2021",
                    description:
                        "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
                    views: 120,
                    like: 200,
                    dislike: 400,
                    background: image2,
                    id: 3,
                },
                {
                    date: "29 марта 2021",
                    description:
                        "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
                    views: 120,
                    like: 150,
                    dislike: 400,
                    background: image1,
                    id: 4,
                },
            ],
        },
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
        selectedNews() {
            return this.testData[this.activeBtn];
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
    align-items: flex-end;
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
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateX(20%);
}
</style>
