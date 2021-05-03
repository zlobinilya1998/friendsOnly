<template>
    <div>
        <transition-group>
            <div v-if="loading" key="first-slider">
                <div class="pre-slider">
                    <div v-for="item in 3" :key="item" class="pre-slider-item">
                        <div class="pre-item-content"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="news">
                        <div v-for="item in 4" :key="item" class="pre-item">
                            <div class="pageTotalLoad"></div>
                            <div class="pre-content"></div>
                            <div class="pre-text-content">
                                <p class="pre-date"></p>
                                <h5 class="pre-description"></h5>
                                <h5 class="pre-description"></h5>
                                <h5 class="pre-description-bottom"></h5>
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
            </div>
            <div v-else key="second">
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
                    <transition name="list">
                        <div class="news">
                            <NewsItem
                                v-for="item of selectedNews"
                                :key="item.id"
                                :item="item"
                                @click.native="clickNews(item.id)"
                            />
                        </div>
                    </transition>
                </div>
            </div>
        </transition-group>
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
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 2500);
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

/* PRELOADER*/
.pre-slider {
    height: 71px;
    margin-left: 23px;
    background: transparent;
    display: flex;
    align-items: center;
}
.pre-slider-item {
    height: 44px;
    width: 122px;
    cursor: pointer;
    padding: 16px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: #ffffff;
    transition: all 0.5s ease;
}
.pre-slider-item:first-child {
    width: 55px;
}
.pre-item-content {
    width: 92px;
    height: 9px;
    background: #f0f0f0;
    border-radius: 50px;
}
.pre-second {
    width: 105px;
}
.pre-slider-item:nth-child(n + 2) {
    margin-left: 8px;
}

/*PRELOADER ITEM*/
.news {
    display: flex;
    flex-direction: column;
}

.pre-item {
    border-radius: 8px;
    cursor: pointer;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 307px;
    overflow: hidden;
    background: #ffffff;
    padding: 16px 17px 23px 16px;
}
.pre-item:last-child {
    margin-bottom: 55px;
}

.pre-content {
    height: 135px;
    background: #f0f0f0;
    border-radius: 13px;
}

.pre-date {
    width: 50px;
    height: 8px;
    background: #e3e3e3;
    border-radius: 50px;
    margin-top: 19px;
}
.pre-description {
    margin-top: 16px;
    width: 273px;
    height: 8px;
    background: #f0f0f0;
    border-radius: 50px;
}
.pre-description-bottom {
    margin-top: 16px;
    width: 212px;
    height: 8px;
    background: #f0f0f0;
    border-radius: 50px;
}
.pre-rating {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}
.pre-views {
    display: flex;
    align-items: center;
}
.pre-like-blog {
    display: flex;
}
.pre-like {
    display: flex;
    align-items: center;
}
.pre-dislike {
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.pre-views {
    background: #e3e3e3;
    border-radius: 50px;
    width: 55px;
    height: 12px;
}
.pre-like {
    background: #e3e3e3;
    border-radius: 50px;
    width: 50px;
    height: 12px;
}
.pre-dislike {
    width: 50px;
    height: 12px;

    background: #e3e3e3;
    border-radius: 50px;
}
</style>
