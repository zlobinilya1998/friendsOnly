<template>
    <div>
        <Header />
        <div class="containerOuter">
            <div class="container">
                <div v-for="item of news" :key="item.id" class="item">
                    <div class="item-shadow"></div>
                    <div class="item-background"></div>
                    <div class="text-content">
                        <p class="date">{{ item.date }}</p>
                        <h5 class="description">{{ item.description }}</h5>
                        <div class="rating">
                            <p class="views">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M6.99991 5.09033C5.94672 5.09033 5.09082 5.94623 5.09082 6.99942C5.09082 8.05261 5.94672 8.9085 6.99991 8.9085C8.0531 8.9085 8.909 8.05261 8.909 6.99942C8.909 5.94623 8.05307 5.09033 6.99991 5.09033Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M7.00002 2.22632C3.81818 2.22632 1.10092 4.20539 0 6.99905C1.10092 9.79268 3.81818 11.7718 7.00002 11.7718C10.185 11.7718 12.8991 9.79268 14 6.99905C12.8991 4.20539 10.185 2.22632 7.00002 2.22632ZM7.00002 10.1809C5.24365 10.1809 3.81818 8.75538 3.81818 6.99902C3.81818 5.24265 5.24365 3.81722 7.00002 3.81722C8.75638 3.81722 10.1818 5.24268 10.1818 6.99905C10.1818 8.75541 8.75638 10.1809 7.00002 10.1809Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                {{ item.views }}K
                            </p>
                            <div class="like-blog">
                                <p class="like">
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M0.947917 12.4578H2.30208C2.82479 12.4578 3.25 12.0326 3.25 11.5098V5.28068C3.25 4.75797 2.82479 4.33276 2.30208 4.33276H0.947917C0.425208 4.33276 0 4.75797 0 5.28068V11.5098C0 12.0326 0.425208 12.4578 0.947917 12.4578Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.92304 0.40625C6.38138 0.40625 6.11054 0.677083 6.11054 2.03125C6.11054 3.31825 4.86417 4.35392 4.0625 4.88746V11.5976C4.92971 11.999 6.66575 12.5938 9.36054 12.5938H10.2272C11.2835 12.5938 12.1826 11.8354 12.3614 10.7954L12.968 7.27458C13.1955 5.9475 12.1772 4.73958 10.8339 4.73958H8.27721C8.27721 4.73958 8.68346 3.92708 8.68346 2.57292C8.68346 0.947917 7.46471 0.40625 6.92304 0.40625Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="13" height="13" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    {{ item.like }}
                                </p>
                                <p class="dislike">
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M0.947917 0.542236H2.30208C2.82479 0.542236 3.25 0.967444 3.25 1.49015V7.71932C3.25 8.24203 2.82479 8.66724 2.30208 8.66724H0.947917C0.425208 8.66724 0 8.24203 0 7.71932V1.49015C0 0.967444 0.425208 0.542236 0.947917 0.542236Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.92304 12.5938C6.38138 12.5938 6.11054 12.3229 6.11054 10.9688C6.11054 9.68175 4.86417 8.64608 4.0625 8.11254V1.40238C4.92971 1.001 6.66575 0.40625 9.36054 0.40625H10.2272C11.2835 0.40625 12.1826 1.16458 12.3614 2.20458L12.968 5.72542C13.1955 7.0525 12.1772 8.26042 10.8339 8.26042H8.27721C8.27721 8.26042 8.68346 9.07292 8.68346 10.4271C8.68346 12.0521 7.46471 12.5938 6.92304 12.5938Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect
                                                    width="13"
                                                    height="13"
                                                    fill="white"
                                                    transform="matrix(1 0 0 -1 0 13)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    {{ item.dislike }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="news-blog">
                    <div class="text-wrapper">
                        <p>
                            Одно из самых тяжелых испытаний для человека — смерть близкого. Однако
                            родственники героев нашего сегодняшнего материала столкнулись с гораздо
                            более страшной трагедией — их родные пропали без вести, оставив близких
                            в полнейшем неведении относительно их судьбы. Ушла гулять с подругой и
                            не вернулась, пропала из гостиничного номера, исчез по дороге в
                            художественную школу — эти жуткие формулировки стали последними
                            воспоминаниями для тех, чьи родные бесследно исчезли, не оставив никаких
                            следов, улик и тени надежды на то, что они когда-нибудь вернутся домой.
                            Долгие месяцы и даже годы поисков, привлечение сил полиции и волонтеров,
                            отчаянное желание узнать хоть что-то о судьбе своих родных — эти дела о
                            пропавших не сдвинулись с мертвой точки, несмотря на колоссальные усилия
                            всех участников расследования. Однако в сердцах тех, кто ждет их дома,
                            все еще жива надежда на встречу.
                        </p>
                    </div>
                    <div class="img-wrapper">
                        <img class="blog-img" src="../../../public/img/NewsOpen1.png" />
                    </div>
                    <div class="text-wrapper">
                        <h4>Николь Морен</h4>
                        <p class="blog-text">
                            8-летняя Николь Луиза Морен 30 июля 1985 года находилась в своем доме в
                            Торонто вместе с матерью. Семья жила в престижном районе города Этобико,
                            а их многоквартирный жилой комплекс с бассейном, тренажерным залом,
                            игровыми комнатами и охраняемой территорией считался абсолютно
                            безопасным.
                        </p>
                    </div>
                    <div class="img-wrapper">
                        <img class="blog-img" src="../../../public/img/NewsOpen2.png" />
                    </div>
                    <div class="text-wrapper">
                        <p class="blog-text">
                            Утром Николь сообщила маме, что хочет пойти к бассейну вместе со своей
                            приятельницей, также проживающей в этом доме, и женщина согласилась —
                            родители девочки часто отпускали ее гулять на территории здания, будучи
                            уверенными в том, что там не случится ничего плохого. Перед выходом
                            Николь из квартиры в домофон позвонила ее подруга Морен и сообщила, что
                            ждет в холле дома — путь до вестибюля составлял около трех минут,
                            включая дорогу до лифта и спуск вниз. Примерно в 11 часов утра девочка
                            вышла из квартиры и больше никогда не вернулась.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";
import NewsItem from "@/components/desktop/NewsItem";

import image1 from "@/../public/img/img1.png";

const NewsOpen = {
    name: "NewsOpen",
    components: {
        NewsItem,
        Header,
    },
    data() {
        return {
            img: image1,
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
    width: 940px;
    margin: 0 auto;
    margin-bottom: 40px;
}

.container {
    width: 700px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 0px 0px 25px 25px;
}

/* Item */

.item {
    min-height: 439px;
    cursor: pointer;
    padding: 0px 40px 30px;
    display: flex;
    align-items: flex-end;
    mix-blend-mode: multiply;
    justify-content: center;
    position: relative;
}
.item-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.95;
    z-index: -1;
    background: linear-gradient(
        180deg,
        rgba(196, 196, 196, 0) 0%,
        rgba(0, 0, 0, 0.630208) 58.33%,
        #000000 100%
    );
}
.item-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -2;
    background-image: url("../../../public/img/img1.png");
    background-repeat: no-repeat;
    background-size: cover;
}
.text-content {
    display: flex;
    flex-direction: column;
}
.date {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    opacity: 0.75;
}
.description {
    margin-top: 3px;
}
.rating {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
}
.views {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
}
.like-blog {
    display: flex;
}
.like {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
}
.dislike {
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
}
.views > svg,
.like > svg,
.dislike > svg {
    margin-right: 8px;
}
.news-blog {
    padding: 30px 0px 55px 0px;
}
.text-wrapper {
    padding: 0px 60px 0px 40px;
}
.img-wrapper {
    min-height: 523px;
    margin: 30px 0px;
}
.blog-text {
    margin-top: 15px;
}
.comments {
    margin-top: 40px;
}
</style>
