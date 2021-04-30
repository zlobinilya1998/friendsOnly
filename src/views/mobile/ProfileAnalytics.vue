<template>
    <div class="container">
        <div class="wrapper">
            <div class="header">
                <svg
                    @click="goBack"
                    width="10"
                    height="18"
                    :style="{ cursor: 'pointer' }"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.95897 17.1619L0.350184 9.81619C-0.116729 9.36542 -0.116729 8.63458 0.350184 8.18381L7.95897 0.838075C8.42589 0.387306 9.1829 0.387306 9.64982 0.838076C10.1167 1.28885 10.1167 2.01969 9.64982 2.47046L2.88645 9L9.64982 15.5295C10.1167 15.9803 10.1167 16.7112 9.64982 17.1619C9.1829 17.6127 8.42589 17.6127 7.95897 17.1619Z"
                        fill="#292941"
                    />
                </svg>
                <p class="header-title">Аналитика Профиля</p>
            </div>
            <div class="user-block">
                <div class="img-wrapper">
                    <img class="img" src="@/../public/img/avatar.png" />
                </div>

                <div class="user-name-wrapper">
                    <p>Кира Майер</p>
                    <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.74109 1.38444C9.14015 0.919369 9.85985 0.919369 10.2589 1.38444L11.824 3.20841C12.0314 3.45011 12.3415 3.57857 12.6591 3.55431L15.0555 3.37125C15.6665 3.32457 16.1754 3.83347 16.1287 4.44451L15.9457 6.84093C15.9214 7.15849 16.0499 7.46861 16.2916 7.67601L18.1156 9.24109C18.5806 9.64015 18.5806 10.3598 18.1156 10.7589L16.2916 12.324C16.0499 12.5314 15.9214 12.8415 15.9457 13.1591L16.1287 15.5555C16.1754 16.1665 15.6665 16.6754 15.0555 16.6287L12.6591 16.4457C12.3415 16.4214 12.0314 16.5499 11.824 16.7916L10.2589 18.6156C9.85985 19.0806 9.14015 19.0806 8.74109 18.6156L7.17601 16.7916C6.96861 16.5499 6.65849 16.4214 6.34093 16.4457L3.94451 16.6287C3.33347 16.6754 2.82457 16.1665 2.87125 15.5555L3.05431 13.1591C3.07857 12.8415 2.95011 12.5314 2.70841 12.324L0.884441 10.7589C0.419369 10.3598 0.419369 9.64015 0.884442 9.24109L2.70841 7.67601C2.95011 7.46861 3.07857 7.15849 3.05431 6.84093L2.87125 4.44451C2.82457 3.83347 3.33347 3.32457 3.94451 3.37125L6.34093 3.55431C6.65849 3.57857 6.96861 3.45011 7.17601 3.20841L8.74109 1.38444Z"
                            fill="#469BFC"
                        />
                        <g clip-path="url(#clip0)">
                            <path
                                d="M10.0486 13.3383C9.83753 13.6248 9.50885 13.8008 9.15347 13.8183C8.79809 13.836 8.45389 13.6928 8.21577 13.4283L6.08186 11.0603C5.74271 10.6841 5.77284 10.1043 6.14897 9.7652C6.52545 9.42606 7.10489 9.45636 7.44403 9.83267L8.95377 11.5082C8.97614 11.5331 9.00861 11.5464 9.04198 11.5448C9.07554 11.5432 9.1062 11.5264 9.12623 11.4997L12.2294 7.29089C12.5298 6.88319 13.1038 6.79642 13.5117 7.09696C13.9192 7.3975 14.0058 7.97152 13.7052 8.37904L10.0486 13.3383Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect
                                    width="8.03846"
                                    height="8.03846"
                                    fill="white"
                                    transform="translate(5.8457 6.34766)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <p class="user-id">@mayer_kira</p>
            </div>
        </div>

        <div>
            <div class="text flex">
                <p>Переходы в профиль</p>
            </div>
            <div class="wrapper border">
                <div class="schedule">
                    <p>24 февр. 2021 — 2 апр. 2021</p>
                    <div class="scroll-position"></div>
                </div>
            </div>
        </div>
        <div>
            <div class="text flex">
                <p>Просмотры</p>
            </div>
            <div class="wrapper border">
                <div class="schedule">
                    <p>24 февр. 2021 — 2 апр. 2021</p>
                    <div class="scroll-position"></div>
                </div>
            </div>
        </div>
        <div>
            <div class="text flex">
                <p>Регистрации</p>
            </div>
            <div class="wrapper border">
                <div class="schedule">
                    <p>24 февр. 2021 — 2 апр. 2021</p>
                    <div class="scroll-position"></div>
                </div>
            </div>
        </div>
        <div>
            <div class="text flex">
                <p>Подписки</p>
            </div>
            <div class="wrapper border">
                <div class="schedule">
                    <p>24 февр. 2021 — 2 апр. 2021</p>
                    <div class="scroll-position"></div>
                    <div class="btn-wrapper">
                        <button class="btn blue">
                            Подписались
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="7" cy="7" r="6.5" fill="#469BFC" stroke="white" />
                                <g clip-path="url(#clip6)">
                                    <path
                                        d="M7.13715 9.21702C6.97961 9.43085 6.73428 9.56227 6.46901 9.57533C6.20375 9.58852 5.94684 9.48161 5.7691 9.28421L4.17633 7.51666C3.92319 7.23592 3.94568 6.80315 4.22642 6.55001C4.50744 6.29687 4.93993 6.31949 5.19307 6.60037L6.31996 7.851C6.33665 7.86958 6.36089 7.87955 6.3858 7.87833C6.41085 7.87712 6.43374 7.8646 6.44868 7.84467L8.76493 4.70315C8.98912 4.39885 9.41758 4.33408 9.72202 4.55841C10.0262 4.78273 10.0908 5.21119 9.8665 5.51536L7.13715 9.21702Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip6">
                                        <rect
                                            width="6"
                                            height="6"
                                            fill="white"
                                            transform="translate(4 4)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button class="btn red">
                            Отписались
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="7" cy="7" r="6.5" fill="#ED2416" stroke="white" />
                                <g clip-path="url(#clip7)">
                                    <path
                                        d="M7.13715 9.21702C6.97961 9.43085 6.73428 9.56227 6.46901 9.57533C6.20375 9.58852 5.94684 9.48161 5.7691 9.28421L4.17633 7.51666C3.92319 7.23592 3.94568 6.80315 4.22642 6.55001C4.50744 6.29687 4.93993 6.31949 5.19307 6.60037L6.31996 7.851C6.33665 7.86958 6.36089 7.87955 6.3858 7.87833C6.41085 7.87712 6.43374 7.8646 6.44868 7.84467L8.76493 4.70315C8.98912 4.39885 9.41758 4.33408 9.72202 4.55841C10.0262 4.78273 10.0908 5.21119 9.8665 5.51536L7.13715 9.21702Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip7">
                                        <rect
                                            width="6"
                                            height="6"
                                            fill="white"
                                            transform="translate(4 4)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="text flex">
                <p>Заработано</p>
            </div>
            <div class="wrapper border">
                <div class="schedule">
                    <p>24 февр. 2021 — 2 апр. 2021</p>
                    <div class="scroll-position"></div>
                    <div class="btn-wrapper">
                        <div>
                            <button class="btn blue">
                                Подписки
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="7" cy="7" r="6.5" fill="#469BFC" stroke="white" />
                                    <g clip-path="url(#clip5)">
                                        <path
                                            d="M7.13715 9.21702C6.97961 9.43085 6.73428 9.56227 6.46901 9.57533C6.20375 9.58852 5.94684 9.48161 5.7691 9.28421L4.17633 7.51666C3.92319 7.23592 3.94568 6.80315 4.22642 6.55001C4.50744 6.29687 4.93993 6.31949 5.19307 6.60037L6.31996 7.851C6.33665 7.86958 6.36089 7.87955 6.3858 7.87833C6.41085 7.87712 6.43374 7.8646 6.44868 7.84467L8.76493 4.70315C8.98912 4.39885 9.41758 4.33408 9.72202 4.55841C10.0262 4.78273 10.0908 5.21119 9.8665 5.51536L7.13715 9.21702Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip5">
                                            <rect
                                                width="6"
                                                height="6"
                                                fill="white"
                                                transform="translate(4 4)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button class="btn green">
                                Чаты
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="7" cy="7" r="6.5" fill="#01C99B" stroke="white" />
                                    <g clip-path="url(#clip9)">
                                        <path
                                            d="M7.13715 9.21702C6.97961 9.43085 6.73428 9.56227 6.46901 9.57533C6.20375 9.58852 5.94684 9.48161 5.7691 9.28421L4.17633 7.51666C3.92319 7.23592 3.94568 6.80315 4.22642 6.55001C4.50744 6.29687 4.93993 6.31949 5.19307 6.60037L6.31996 7.851C6.33665 7.86958 6.36089 7.87955 6.3858 7.87833C6.41085 7.87712 6.43374 7.8646 6.44868 7.84467L8.76493 4.70315C8.98912 4.39885 9.41758 4.33408 9.72202 4.55841C10.0262 4.78273 10.0908 5.21119 9.8665 5.51536L7.13715 9.21702Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip9">
                                            <rect
                                                width="6"
                                                height="6"
                                                fill="white"
                                                transform="translate(4 4)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>

                        <button class="btn pink">
                            Подарки
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="7" cy="7" r="6.5" fill="#FF1A88" stroke="white" />
                                <g clip-path="url(#clip8)">
                                    <path
                                        d="M7.13715 9.21702C6.97961 9.43085 6.73428 9.56227 6.46901 9.57533C6.20375 9.58852 5.94684 9.48161 5.7691 9.28421L4.17633 7.51666C3.92319 7.23592 3.94568 6.80315 4.22642 6.55001C4.50744 6.29687 4.93993 6.31949 5.19307 6.60037L6.31996 7.851C6.33665 7.86958 6.36089 7.87955 6.3858 7.87833C6.41085 7.87712 6.43374 7.8646 6.44868 7.84467L8.76493 4.70315C8.98912 4.39885 9.41758 4.33408 9.72202 4.55841C10.0262 4.78273 10.0908 5.21119 9.8665 5.51536L7.13715 9.21702Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip8">
                                        <rect
                                            width="6"
                                            height="6"
                                            fill="white"
                                            transform="translate(4 4)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="text flex">
            <p>Страны</p>
        </div>
        <div class="wrapper border">
            <div class="schedule countries">
                <div class="circle-wrapper">
                    <img class="img" src="@/../public/img/circle.png" />
                </div>
                <div class="countries-content">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="15" height="15" rx="3" fill="#469BFC" />
                    </svg>
                    <div>
                        <p class="countries-name">Россия</p>
                        <p class="percent">70% (1 500)</p>
                    </div>
                </div>
                <div class="countries-content">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="15" height="15" rx="3" fill="#0069E2" />
                    </svg>
                    <div>
                        <p class="countries-name">Узбекистан</p>
                        <p class="percent">20% (500)</p>
                    </div>
                </div>
                <div class="countries-content">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="15" height="15" rx="3" fill="#9AC6FF" />
                    </svg>
                    <div>
                        <p class="countries-name">ОАЭ</p>
                        <p class="percent">5% (50)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const ProfileAnalytics = {
    name: "ProfileAnalytics",
    data: () => ({
        graph: [
            {
                name: "Переходы в  профиль",
                data: {
                    date: "24 февр. 2021 — 2 апр. 2021",
                },
            },
            {
                name: "Просмотры ",
                data: {
                    date: "24 февр. 2021 — 2 апр. 2021",
                },
            },
            {
                name: "Регистрации",
                data: {
                    date: "24 февр. 2021 — 2 апр. 2021",
                },
            },
            {
                name: "Подписки ",
                data: {
                    date: "24 февр. 2021 — 2 апр. 2021",
                },
            },
            {
                name: "Заработано",
                data: {
                    date: "24 февр. 2021 — 2 апр. 2021",
                },
            },
        ],
    }),
    methods: {
        goBack() {
            this.$router.push("/mobile");
        },
    },
};

export default ProfileAnalytics;
</script>

<style scoped>
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
.text {
    height: 56px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #292941;
}

.btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.btn {
    padding: 13px 18px 12px;
    height: 39px;
    border-radius: 8px;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin: 5px;
}

.btn > svg {
    margin-left: 12px;
}
.btn.blue {
    background: #469bfc;
}
.btn.red {
    background: #ed2416;
}
.btn.green {
    background: #01c99b;
}
.btn.pink {
    background: #ff1a88;
}
.container {
    max-width: 600px;
    margin: 0 auto;
}
.img {
    position: absolute;
    left: 0;
    top: 0;
}
.wrapper {
    background: #ffffff;
}
.wrapper.border {
    border-radius: 13px 13px 0px 0px;
}
.header {
    padding: 0 24px;
    height: 55px;
    display: flex;
    align-items: center;
}
.header-title {
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #292941;
}
.user-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33.5px 0px;
}
.img-wrapper {
    position: relative;
    width: 130px;
    height: 130px;
}

.user-name-wrapper {
    margin: 5px 0px;
    display: flex;
}
.user-name-wrapper > p {
    margin-right: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #292941;
}
.user-id {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #292941;
    opacity: 0.6;
}
.schedule {
    min-height: 396px;
    padding: 20px 23px 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.scroll-position {
    height: 55px;
    border-radius: 8px;
    background: #4a91d8;
}

.circle-wrapper {
    position: relative;
    width: 206px;
    height: 206px;
}
.countries {
    padding: 43px 23px 55px;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.countries-content {
    display: flex;
    align-items: center;
    width: 100%;
}
.countries-content:not(:first-child) {
    margin-top: 20px;
}
.countries-content > div {
    margin-left: 15px;
    display: flex;
    flex: 1;
    justify-content: space-between;
}
.countries-name {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #292941;
}
.percent {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #292941;
    opacity: 0.5;
}
</style>
