<template>
    <div class="container">
        <div class="header">
            <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.95897 16.6619L0.350184 9.31619C-0.116729 8.86542 -0.116729 8.13458 0.350184 7.68381L7.95897 0.338075C8.42589 -0.112694 9.1829 -0.112694 9.64982 0.338076C10.1167 0.788847 10.1167 1.51969 9.64982 1.97046L2.88645 8.5L9.64982 15.0295C10.1167 15.4803 10.1167 16.2112 9.64982 16.6619C9.1829 17.1127 8.42589 17.1127 7.95897 16.6619Z"
                    fill="#292941"
                />
            </svg>
            <h3 class="title">Выбрать даты</h3>
        </div>

        <div class="container-inner">
            <div class="week-days">
                <p v-for="day of weekDays" :key="day">{{ day }}</p>
            </div>
            <div class="date" v-for="month in 2" :key="month">
                <div class="month-wrapper">
                    <p class="month-name">Март 2021</p>
                    <p class="month-title">Весь месяц</p>
                </div>
                <div class="week" v-for="week in 5" :key="week">
                    <p v-for="item in 7" :key="item">{{ item }}</p>
                </div>
            </div>
            <div class="btn">Подтвердить выбор</div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        weekDays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
    }),
};
</script>

<style scoped>
.container {
    min-height: 100vh;
    background: #f4f4f4;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
    min-width: 300px;
}
.title {
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}
.header {
    background: #ffffff;
    height: 75px;
    padding: 0 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.header > svg {
    position: absolute;
    left: 23px;
}
.container-inner {
    padding: 0px 23px 30px;
    position: relative;
}
.date {
    min-height: 295px;
    background: #ffffff;
    border-radius: 13px;
    padding: 25px 20px 30px;
    margin: 0 0 10px;
}
.month-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.month-name {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
}
.month-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #469bfc;
}
.week-days {
    display: flex;
    padding: 12px 20px;
    justify-content: space-between;
}
.week-days > p {
    height: 17px;
    width: 21px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.2;
}
.week {
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
}
.week > p {
    width: 21px;
    text-align: center;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    opacity: 0.5;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #469bfc;
    border-radius: 13px;
    margin: 18px 0 0;
    color: #ffffff;
    cursor: pointer;
}
</style>
