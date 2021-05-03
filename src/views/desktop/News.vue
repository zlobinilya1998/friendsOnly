<template>
    <div>
        <Header :showInput="false" :showMenu="false" :showBurgerMenu="true" />
        <router-link custom v-slot="{ navigate }" to="/desktop">
            <div class="btn" @click="navigate">
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
        </router-link>

        <transition name="fade">
            <div class="container" v-if="loading" key="first">
                <div class="pre-slider">
                    <div class="pre-slider-item">
                        <div class="pre-item-content"></div>
                    </div>
                    <div v-for="item in 3" :key="item" class="pre-slider-item">
                        <div class="pre-item-content pre-second"></div>
                    </div>
                </div>
                <div class="pre-news-blog">
                    <div class="pre-item" v-for="item in 4" :key="item">
                        <div class="pageTotalLoad"></div>
                        <div class="pre-background"></div>
                        <div class="pre-text-content">
                            <p class="pre-date"></p>
                            <div class="pre-description pre-description-mid"></div>
                            <div class="pre-description pre-description-bottom"></div>
                            <div class="pre-rating">
                                <div class="pre-views"></div>
                                <div class="pre-like-blog">
                                    <div class="pre-like"></div>
                                    <div class="pre-dislike"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" v-else key="second">
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
                <div class="news-blog">
                    <NewsItem
                        v-for="item in selectedNews"
                        :key="item.id"
                        :item="item"
                        @click.native="clickNews(item.id)"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";
import NewsItem from "@/components/desktop/NewsItem";

import image1 from "@/../public/img/img1.png";
import image2 from "@/../public/img/img2.png";

const News = {
    name: "News",
    components: {
        NewsItem,
        Header,
    },
    data: () => ({
        loading: true,
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
        activeBtn: "Все",
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
    }),
    computed: {
        selectedNews() {
            return this.testData[this.activeBtn];
        },
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
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    },
};
export default News;
</script>

<style scoped>
.slider {
    height: 84px;
    background: transparent;
    display: flex;
    align-items: center;
}
.slider-item {
    height: 44px;
    cursor: pointer;
    padding: 12px 15px 13px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    font-family: "Roboto";
    color: #ffffff;
    transition: all 0.5s ease;
}
.slider-item:nth-child(n + 2) {
    margin-left: 8px;
}
.slider-item.active {
    background: #469bfc !important;
}
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

.fade-leave-enter,
.fade-enter {
    transition: all 0.5s;
}

/*PRELOADER */
.pre-slider {
    height: 84px;
    background: transparent;
    display: flex;
    align-items: center;
}
.pre-slider-item {
    height: 44px;
    cursor: pointer;
    padding: 18px 15px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    background: #f5f5f5;
    transition: all 0.5s ease;
}
.pre-item-content {
    width: 40px;
    height: 8px;
    background: #ecebeb;
    border-radius: 50px;
}
.pre-second {
    width: 105px;
}
.pre-slider-item:nth-child(n + 2) {
    margin-left: 8px;
}

.pre-news-blog {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.pre-item {
    width: 440px;
    min-height: 410px;
    cursor: pointer;
    padding: 25px 20px 32px 20px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0.95;
    border-radius: 8px;
    background: #f5f5f5;
    transition: all 0.4s;
    position: relative;
    overflow: hidden;
}
.pre-background {
    height: 215px;
    background: #e4e4e4;
    border-radius: 8px;
    flex: 1;
    margin-bottom: 29px;
}
.pre-text-content {
    display: flex;
    flex-direction: column;
}
.pre-date {
    height: 10px;
    width: 60px;
    border-radius: 50px;
    background: #ecebeb;
}
.pre-description {
    margin-top: 10px;
    height: 14px;
    width: inherit;
    background: #dbdbdb;
    border-radius: 50px;
}
.pre-description-bottom {
    width: 187px;
    height: 13px;
}

.pre-rating {
    margin-top: 27px;
    height: 13px;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
}

.pre-like-blog {
    display: flex;
    width: 140px;
    justify-content: space-between;
}
.pre-views,
.pre-like,
.pre-dislike {
    height: 13px;
    width: 60px;
    background: #ecebeb;
    border-radius: 50px;
}
</style>
