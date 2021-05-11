<template>
    <div>
        <Header />
        <div class="container">
            <div class="user-blog">
                <div class="user-profile">
                    <h2>Аналитика Профиля</h2>
                    <div class="img-wrapper">
                        <img class="img" src="@/../public/img/avatar.png" />
                    </div>
                    <div class="name-wrapper">
                        <h3>
                            Кира Майер
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.74115 0.884441C9.14021 0.419369 9.85991 0.419369 10.259 0.884442L11.8241 2.70841C12.0315 2.95011 12.3416 3.07857 12.6591 3.05431L15.0555 2.87125C15.6666 2.82457 16.1755 3.33347 16.1288 3.94451L15.9458 6.34093C15.9215 6.65849 16.05 6.96861 16.2917 7.17601L18.1156 8.74109C18.5807 9.14015 18.5807 9.85985 18.1156 10.2589L16.2917 11.824C16.05 12.0314 15.9215 12.3415 15.9458 12.6591L16.1288 15.0555C16.1755 15.6665 15.6666 16.1754 15.0555 16.1287L12.6591 15.9457C12.3416 15.9214 12.0314 16.0499 11.8241 16.2916L10.259 18.1156C9.85991 18.5806 9.14021 18.5806 8.74115 18.1156L7.17607 16.2916C6.96867 16.0499 6.65855 15.9214 6.34099 15.9457L3.94457 16.1287C3.33353 16.1754 2.82464 15.6665 2.87131 15.0555L3.05437 12.6591C3.07863 12.3415 2.95017 12.0314 2.70847 11.824L0.884503 10.2589C0.41943 9.85985 0.41943 9.14015 0.884503 8.74109L2.70847 7.17601C2.95017 6.96861 3.07863 6.65849 3.05437 6.34093L2.87131 3.94451C2.82464 3.33347 3.33354 2.82457 3.94457 2.87125L6.34099 3.05431C6.65855 3.07857 6.96867 2.95011 7.17607 2.70841L8.74115 0.884441Z"
                                    fill="#469BFC"
                                />
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M10.0487 12.8383C9.83766 13.1248 9.50898 13.3008 9.1536 13.3183C8.79822 13.336 8.45402 13.1928 8.2159 12.9283L6.08199 10.5603C5.74284 10.1841 5.77297 9.60435 6.1491 9.2652C6.52558 8.92606 7.10502 8.95636 7.44416 9.33267L8.9539 11.0082C8.97627 11.0331 9.00874 11.0464 9.04211 11.0448C9.07567 11.0432 9.10633 11.0264 9.12636 10.9997L12.2295 6.79089C12.5299 6.38319 13.1039 6.29642 13.5118 6.59696C13.9193 6.8975 14.0059 7.47152 13.7054 7.87904L10.0487 12.8383Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect
                                            width="8.03846"
                                            height="8.03846"
                                            fill="white"
                                            transform="translate(5.84582 5.84766)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </h3>
                        <p>@mayer_kira</p>
                    </div>
                </div>
            </div>
            <Chart :graphData="graphData" />
            <div v-for="item in graphName" :key="item.title">
                <div class="text-content">{{ item.title }}</div>
                <div class="graph-container">
                    <div class="date">{{ item.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";
import Chart from "@/components/desktop/Chart";

let ProfileAnalytics = {
    name: "ProfileAnalytics",
    components: {
        Header,
        Chart,
    },
    data: () => ({
        graphName: [
            { title: "Переходы в  профиль", date: "24 февр. 2021 — 2 апр. 2021" },
            { title: "Просмотры ", date: "24 февр. 2021 — 2 апр. 2021" },
            { title: "Регистрации", date: "24 февр. 2021 — 2 апр. 2021" },
            { title: "Подписки", date: "24 февр. 2021 — 2 апр. 2021" },
            { title: "Заработано  ", date: "24 февр. 2021 — 2 апр. 2021" },
        ],
        graphData: [
            { id: 1, date: `2021-01-26T13:51:50.417Z`, views: 10 },
            { id: 2, date: `2021-01-27T13:51:50.417Z`, views: 12 },
            { id: 3, date: `2021-01-28T13:51:50.417Z`, views: 30 },
            { id: 4, date: `2021-01-29T13:51:50.417Z`, views: 40 },
            { id: 5, date: `2021-01-30T13:51:50.417Z`, views: 23 },
            { id: 6, date: `2021-02-01T13:51:50.417Z`, views: 100 },
            { id: 7, date: `2021-02-02T13:51:50.417Z`, views: 75 },
            { id: 8, date: `2021-02-03T13:51:50.417Z`, views: 44 },
            { id: 9, date: `2021-02-04T13:51:50.417Z`, views: 120 },
        ],
    }),
};

export default ProfileAnalytics;
</script>

<style scoped>
.container {
    max-width: 940px;
    margin: 0 auto;
    background: #f9f9f9;
    min-height: 100vh;
}
.user-blog {
    height: 424px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-wrapper {
    margin-top: 70px;
    width: 130px;
    height: 130px;
    position: relative;
}
.img {
    position: absolute;
    left: 0;
    top: 0;
}
.name-wrapper {
    margin-top: 10px;
    text-align: center;
}
.name-wrapper > h3 {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}
.name-wrapper > h3 > svg {
    margin-left: 5px;
}
.text-content {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.graph-container {
    min-height: 630px;
    background: #ffffff;
    padding: 35px 30px 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.date {
    text-align: center;
}
#chart {
    margin-top: 10px;
    border: 2px solid black;
}
</style>
