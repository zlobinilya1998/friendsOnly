<template>
    <transition-group>
        <div
            v-if="loading"
            class="container"
            :style="{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                padding: '0',
                maxWidth: '600px',
                left: '50%',
                transform: 'translateX(-50%)',
            }"
            key="first"
        >
            <div class="pre-view">
                <div class="pageTotalLoad"></div>
                <div class="pre-btn">
                    <svg
                        width="5"
                        height="8"
                        viewBox="0 0 5 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.97949 7.8409L0.175093 4.38409C-0.0583631 4.17196 -0.0583631 3.82804 0.175094 3.61591L3.97949 0.159096C4.21294 -0.053032 4.59145 -0.053032 4.82491 0.159096C5.05836 0.371223 5.05836 0.715149 4.82491 0.927277L1.44322 4L4.82491 7.07272C5.05836 7.28485 5.05836 7.62878 4.82491 7.8409C4.59145 8.05303 4.21294 8.05303 3.97949 7.8409Z"
                            fill="white"
                            fill-opacity="0.9"
                        />
                    </svg>
                    Назад
                </div>
                <div class="pre-content">
                    <div class="pre-data"></div>
                    <div class="pre-description"></div>
                    <div class="pre-description second"></div>
                    <div class="pre-like-bar">
                        <div class="pre-views"></div>
                        <div class="pre-rating">
                            <div class="pre-like"></div>
                            <div class="pre-dislike"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre-loader">
                <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.5 6.71642C13.783 6.71642 6.71642 13.783 6.71642 22.5C6.71642 31.217 13.783 38.2836 22.5 38.2836C31.217 38.2836 38.2836 31.217 38.2836 22.5C38.2836 13.783 31.217 6.71642 22.5 6.71642ZM0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5Z"
                        fill="#F0F0F0"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.8358 6.71642C13.878 6.71642 6.71642 13.8378 6.71642 22.5C6.71642 31.1622 13.878 38.2836 22.8358 38.2836C24.6905 38.2836 26.194 39.7871 26.194 41.6418C26.194 43.4965 24.6905 45 22.8358 45C10.2792 45 0 34.9812 0 22.5C0 10.0188 10.2792 0 22.8358 0C24.6905 0 26.194 1.50352 26.194 3.35821C26.194 5.2129 24.6905 6.71642 22.8358 6.71642Z"
                        fill="#E2E2E2"
                    />
                </svg>
            </div>
        </div>
        <div v-else class="container" key="second">
            <svg
                @click="scrollTop"
                class="arrow-up"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_b)">
                    <circle
                        r="22.5"
                        transform="matrix(1 0 0 -1 23.5 23.5)"
                        fill="white"
                        fill-opacity="0.9"
                    />
                    <circle
                        r="22.5"
                        transform="matrix(1 0 0 -1 23.5 23.5)"
                        stroke="black"
                        stroke-opacity="0.05"
                        stroke-width="1.5"
                    />
                </g>
                <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.8771 25.209L23.7752 17.6002C23.278 17.1333 22.472 17.1333 21.9748 17.6002L13.8729 25.209C13.3757 25.6759 13.3757 26.4329 13.8729 26.8998C14.3701 27.3667 15.1761 27.3667 15.6733 26.8998L22.875 20.1364L30.0767 26.8998C30.5739 27.3667 31.3799 27.3667 31.8771 26.8998C32.3743 26.4329 32.3743 25.6759 31.8771 25.209Z"
                    fill="#292941"
                />
                <defs>
                    <filter
                        id="filter0_b"
                        x="-4.75"
                        y="-4.75"
                        width="56.5"
                        height="56.5"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2.5" />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
            <div class="like-bar" ref="menu" id="menu">
                <div class="like-item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip10)">
                            <path
                                d="M1.45833 19.1655H3.54167C4.34583 19.1655 5 18.5114 5 17.7072V8.12386C5 7.31969 4.34583 6.66553 3.54167 6.66553H1.45833C0.654167 6.66553 0 7.31969 0 8.12386V17.7072C0 18.5114 0.654167 19.1655 1.45833 19.1655Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                            <path
                                d="M10.6508 0.625C9.8175 0.625 9.40083 1.04167 9.40083 3.125C9.40083 5.105 7.48333 6.69833 6.25 7.51917V17.8425C7.58417 18.46 10.255 19.375 14.4008 19.375H15.7342C17.3592 19.375 18.7425 18.2083 19.0175 16.6083L19.9508 11.1917C20.3008 9.15 18.7342 7.29167 16.6675 7.29167H12.7342C12.7342 7.29167 13.3592 6.04167 13.3592 3.95833C13.3592 1.45833 11.4842 0.625 10.6508 0.625Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip10">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="like-item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip1)">
                            <path
                                d="M1.45833 0.834718H3.54167C4.34583 0.834718 5 1.48888 5 2.29305V11.8764C5 12.6806 4.34583 13.3347 3.54167 13.3347H1.45833C0.654167 13.3347 0 12.6806 0 11.8764V2.29305C0 1.48888 0.654167 0.834718 1.45833 0.834718Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                            <path
                                d="M10.6508 19.375C9.8175 19.375 9.40083 18.9583 9.40083 16.875C9.40083 14.895 7.48333 13.3017 6.25 12.4808V2.1575C7.58417 1.54 10.255 0.625 14.4008 0.625H15.7342C17.3592 0.625 18.7425 1.79167 19.0175 3.39167L19.9508 8.80833C20.3008 10.85 18.7342 12.7083 16.6675 12.7083H12.7342C12.7342 12.7083 13.3592 13.9583 13.3592 16.0417C13.3592 18.5417 11.4842 19.375 10.6508 19.375Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip1">
                                <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="matrix(1 0 0 -1 0 20)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="like-item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.9983 0H6.00047C2.69302 0 0.0020752 2.69095 0.0020752 5.9984V10.6638C0.0020752 13.8596 2.51407 16.4796 5.66723 16.6532V19.4338C5.66723 19.7461 5.92183 20 6.23474 20C6.38437 20 6.526 19.9407 6.63297 19.8337L7.25814 19.2085C8.8997 17.5666 11.0828 16.6622 13.4048 16.6622H13.9983C17.3058 16.6622 19.9967 13.9713 19.9967 10.6638V5.9984C19.9967 2.69095 17.3058 0 13.9983 0ZM5.66723 9.66409C4.93209 9.66409 4.33425 9.06625 4.33425 8.33111C4.33425 7.59597 4.93209 6.99813 5.66723 6.99813C6.40237 6.99813 7.00021 7.59597 7.00021 8.33111C7.00021 9.06625 6.40203 9.66409 5.66723 9.66409ZM9.99941 9.66409C9.26427 9.66409 8.66643 9.06625 8.66643 8.33111C8.66643 7.59597 9.26427 6.99813 9.99941 6.99813C10.7345 6.99813 11.3324 7.59597 11.3324 8.33111C11.3324 9.06625 10.7342 9.66409 9.99941 9.66409ZM14.3316 9.66409C13.5964 9.66409 12.9986 9.06625 12.9986 8.33111C12.9986 7.59597 13.5964 6.99813 14.3316 6.99813C15.0667 6.99813 15.6646 7.59597 15.6646 8.33111C15.6646 9.06625 15.0664 9.66409 14.3316 9.66409Z"
                            fill="#292941"
                            fill-opacity="0.6"
                        />
                    </svg>
                </div>
                <div class="like-item">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.7667 8.73098L12.5444 0.286779C12.3088 0.0116735 11.9477 -0.0746835 11.6333 0.0677941C11.3178 0.211646 11.1111 0.5557 11.1111 0.938465V5.00434H10.8334C4.86004 5.00434 0 10.4762 0 17.2015V19.078C0 19.5132 0.272217 19.8761 0.648805 19.975C0.710044 19.9924 0.771079 20 0.832115 20C1.14665 20 1.44776 19.7922 1.59322 19.4658C3.15553 15.9467 6.29661 13.7612 9.79108 13.7612H11.1111V17.8269C11.1111 18.2099 11.3178 18.5539 11.6333 18.6964C11.9456 18.8403 12.3088 18.7527 12.5444 18.4774L19.7667 10.0332C20.0778 9.66923 20.0778 9.09634 19.7667 8.73098Z"
                            fill="#292941"
                            fill-opacity="0.6"
                        />
                    </svg>
                </div>
                <div class="like-item">
                    <svg
                        width="26"
                        height="21"
                        viewBox="0 0 26 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.780029 10.2756C9.64603 -0.42237 18.109 1.16144 24.96 10.6719C21.1987 16.6154 11.0968 24.8571 0.780029 10.2756Z"
                            fill="#292941"
                            fill-opacity="0.6"
                        />
                        <path
                            d="M25.5764 10.1335C25.3465 9.80539 19.8675 2.1001 12.8699 2.1001C5.87226 2.1001 0.393039 9.80539 0.163339 10.1332C-0.0544463 10.4444 -0.0544463 10.8666 0.163339 11.1778C0.393039 11.5059 5.87226 19.2112 12.8699 19.2112C19.8675 19.2112 25.3465 11.5059 25.5764 11.1781C25.7945 10.8669 25.7945 10.4444 25.5764 10.1335ZM12.8699 17.4411C7.71539 17.4411 3.25104 12.3269 1.9295 10.6551C3.24933 8.98169 7.70433 3.8702 12.8699 3.8702C18.0241 3.8702 22.4882 8.98347 23.8103 10.6563C22.4904 12.3296 18.0354 17.4411 12.8699 17.4411Z"
                            fill="#292941"
                            fill-opacity="0.6"
                        />
                        <g clip-path="url(#clip3)">
                            <path
                                d="M15.1852 10.0587H15.0484V9.49125C15.0484 8.44172 14.1088 7.565 12.9343 7.54628C12.9022 7.54577 12.8381 7.54577 12.806 7.54628C11.6316 7.565 10.6919 8.44172 10.6919 9.49125V10.0587H10.5551C10.3443 10.0587 10.1724 10.2515 10.1724 10.4896V13.3357C10.1724 13.5735 10.3443 13.7681 10.5551 13.7681H15.1852C15.396 13.7681 15.568 13.5735 15.568 13.3357V10.4896C15.568 10.2515 15.396 10.0587 15.1852 10.0587ZM13.3039 11.9097V12.7697C13.3039 12.8682 13.2109 12.9515 13.0998 12.9515H12.6406C12.5294 12.9515 12.4364 12.8682 12.4364 12.7697V11.9097C12.3286 11.8157 12.2658 11.6856 12.2658 11.5416C12.2658 11.2689 12.5036 11.0346 12.806 11.0237C12.8381 11.0226 12.9023 11.0226 12.9343 11.0237C13.2368 11.0346 13.4746 11.2689 13.4746 11.5416C13.4746 11.6856 13.4118 11.8157 13.3039 11.9097ZM14.1469 10.0587H12.9343H12.806H11.5935V9.49125C11.5935 8.86606 12.1667 8.34913 12.8702 8.34913C13.5736 8.34913 14.1469 8.86606 14.1469 9.49125V10.0587H14.1469Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip3">
                                <rect
                                    width="7.02"
                                    height="6.22222"
                                    fill="white"
                                    transform="translate(9.36035 7.5459)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div v-for="item of items" :key="item.id">
                <div class="container-inner">
                    <p class="text">
                        {{ item.description }}
                    </p>
                </div>
                <div class="img-wrapper">
                    <img class="img" src="@/../public/img/NewsOpen1.png" />
                </div>
                <div class="container-inner">
                    <h4 class="title">{{ item.title }}</h4>
                    <p class="text">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
const NewsOpen = {
    name: "NewsOpen",
    data: () => ({
        lastScrollTop: 0,
        loading: true,
        items: [
            {
                description:
                    "Одно из самых тяжелых испытаний для человека — смерть близкого. Однако родственники героев нашего сегодняшнего материала столкнулись с гораздо более страшной трагедией — их родные пропали без вести, оставив близких в полнейшем неведении относительно их судьбы. Ушла гулять с подругой и не вернулась, пропала из гостиничного номера, исчез по дороге в художественную школу — эти жуткие формулировки стали последними воспоминаниями для тех, чьи родные бесследно исчезли, не оставив никаких следов, улик и тени надежды на то, что они когда-нибудь вернутся домой. Долгие месяцы и даже годы поисков, привлечение сил полиции и волонтеров, отчаянное желание узнать хоть что-то о судьбе своих родных — эти дела о пропавших не сдвинулись с мертвой точки, несмотря на колоссальные усилия всех участников расследования. Однако в сердцах тех,кто ждет их дома, все еще жива надежда на встречу.",
                title: "Николь Морен",
                img: "",
                text:
                    "8-летняя Николь Луиза Морен 30 июля 1985 года находилась в своем доме в Торонто вместе с матерью. Семья жила в престижном районе города Этобико, а их многоквартирный жилой комплекс с бассейном, тренажерным залом, игровыми комнатами и охраняемой территорией считался абсолютно безопасным.",
                id: 0,
            },
            {
                description:
                    "Одно из самых тяжелых испытаний для человека — смерть близкого. Однако родственники героев нашего сегодняшнего материала столкнулись с гораздо более страшной трагедией — их родные пропали без вести, оставив близких в полнейшем неведении относительно их судьбы. Ушла гулять с подругой и не вернулась, пропала из гостиничного номера, исчез по дороге в художественную школу — эти жуткие формулировки стали последними воспоминаниями для тех, чьи родные бесследно исчезли, не оставив никаких следов, улик и тени надежды на то, что они когда-нибудь вернутся домой. Долгие месяцы и даже годы поисков, привлечение сил полиции и волонтеров, отчаянное желание узнать хоть что-то о судьбе своих родных — эти дела о пропавших не сдвинулись с мертвой точки, несмотря на колоссальные усилия всех участников расследования. Однако в сердцах тех,кто ждет их дома, все еще жива надежда на встречу.",
                title: "Николь Морен",
                img: "",
                text:
                    "8-летняя Николь Луиза Морен 30 июля 1985 года находилась в своем доме в Торонто вместе с матерью. Семья жила в престижном районе города Этобико, а их многоквартирный жилой комплекс с бассейном, тренажерным залом, игровыми комнатами и охраняемой территорией считался абсолютно безопасным.",
                id: 1,
            },
            {
                description:
                    "Одно из самых тяжелых испытаний для человека — смерть близкого. Однако родственники героев нашего сегодняшнего материала столкнулись с гораздо более страшной трагедией — их родные пропали без вести, оставив близких в полнейшем неведении относительно их судьбы. Ушла гулять с подругой и не вернулась, пропала из гостиничного номера, исчез по дороге в художественную школу — эти жуткие формулировки стали последними воспоминаниями для тех, чьи родные бесследно исчезли, не оставив никаких следов, улик и тени надежды на то, что они когда-нибудь вернутся домой. Долгие месяцы и даже годы поисков, привлечение сил полиции и волонтеров, отчаянное желание узнать хоть что-то о судьбе своих родных — эти дела о пропавших не сдвинулись с мертвой точки, несмотря на колоссальные усилия всех участников расследования. Однако в сердцах тех,кто ждет их дома, все еще жива надежда на встречу.",
                title: "Николь Морен",
                img: "",
                text:
                    "8-летняя Николь Луиза Морен 30 июля 1985 года находилась в своем доме в Торонто вместе с матерью. Семья жила в престижном районе города Этобико, а их многоквартирный жилой комплекс с бассейном, тренажерным залом, игровыми комнатами и охраняемой территорией считался абсолютно безопасным.",
                id: 2,
            },
        ],
    }),
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        handleScroll() {
            let pageY = window.pageYOffset;
            let { menu } = this.$refs;
            if (!menu) return;
            if (pageY > this.lastScrollTop) {
                menu.style.bottom = "-300px";
                menu.style.opacity = "0";
            } else {
                menu.style.bottom = "50px";
                menu.style.opacity = "1";
            }
            this.lastScrollTop = pageY;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
export default NewsOpen;
</script>

<style scoped>
.container {
    padding: 30px 0px 90px 0px;
    position: relative;
}
.arrow-up {
    cursor: pointer;
    position: fixed;
    bottom: 185px;
    right: 0;
    transform: translateX(-50%);
}

.container-inner {
    padding: 0px 26px 0px 23px;
}
.img-wrapper {
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 18px;
    line-height: 165%;
    color: #292941;
}
.text {
    font-size: 16px;
    line-height: 165%;
    color: #292941;
}
.like-bar {
    position: fixed;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    height: 65px;
    width: 330px;
    flex-direction: row;
    background: #ffffff;
    border: 1.5px solid rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    transition: all 0.8s ease-in;
}
.like-item {
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.like-item:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

.pre-view {
    height: 51vh;
    background: #e9e9e9;
    border-radius: 0px 0px 20px 20px;
    padding: 30px 23px 37px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
}
.pre-btn {
    width: 82px;
    height: 33px;
    background: #d4d4d4;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.9);
}
.pre-btn > svg {
    margin-right: 10px;
}
.pre-data {
    width: 85px;
    height: 8px;
    background: #dddddd;
    border-radius: 50px;
}
.pre-description {
    margin-top: 22px;
    width: 310px;
    height: 10px;
    background: #d4d4d4;
    border-radius: 50px;
}
.pre-description.second {
    width: 225px;
    margin-top: 17px;
}
.pre-like-bar {
    height: 8px;
    margin-top: 36px;
}
.pre-like-bar {
    display: flex;
    justify-content: space-between;
}
.pre-rating {
    display: flex;
    justify-content: space-between;
    width: 116px;
}
.pre-views {
    width: 60px;
    height: 8px;
    background: #dddddd;
    border-radius: 50px;
}
.pre-like,
.pre-dislike {
    width: 50px;
    height: 8px;
    background: #dddddd;
    border-radius: 50px;
}
.pre-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}
.pre-loader > svg {
    animation: rotation 1s linear infinite;
}
</style>
