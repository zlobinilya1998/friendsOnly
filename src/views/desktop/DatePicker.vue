<template>
    <div>
        <Header />
        <div class="container">
            <div class="title">
                <h2 class="title-date">Выбрать даты</h2>
                <p class="title-text">Telegram</p>
            </div>

            <div class="date-wrapper">
                <div v-for="month of displayedMonths" :key="month">
                    <input
                        type="text"
                        v-model="secondInput"
                        placeholder="Выберите вторую дату "
                        class="date-input"
                    />
                    <div class="date">
                        <div class="days">
                            <div v-for="day in calendarData.day" :key="day">{{ day }}</div>
                        </div>
                        <div
                            :style="{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }"
                        >
                            <h4 class="month-title">{{ month.monthTitle }}</h4>
                            <p class="month-btn">Весь месяц</p>
                        </div>
                        <div class="month-inner">
                            <div
                                class="date-week"
                                :style="{
                                    justifyContent: 'space-between',
                                }"
                                v-for="week in month.days"
                                :key="week"
                            >
                                <div
                                    @click="clickOnDay(day.index)"
                                    class="date-day"
                                    :class="{ 'selected-day': day.index === secondInput }"
                                    :style="{ color: day.index === secondInput ? 'blue' : 'black' }"
                                    v-for="day in week"
                                    :key="day"
                                >
                                    <p>
                                        {{ day.index }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="date-btn">Подтвердить выбор</div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";

let DataPicker = {
    name: "DataPicker",
    components: {
        Header,
    },
    data: () => ({
        firstInput: null,
        secondInput: null,
        displayedMonths: [],
        calendarData: {
            year: new Date().getFullYear(),
            dFirstMonth: "1",
            day: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
        },
    }),
    methods: {
        getMonth(month) {
            let today = new Date();
            today.setMonth(month);
            let value = today.toLocaleString("default", { month: "long", year: "numeric" });
            if (navigator.languages[0] === "ru") return value.slice(0, -3);
            return value;
        },
        generateCalendar(monthNumber) {
            let days = [],
                week = 0,
                a;
            days[week] = [];
            let dLast = new Date(this.calendarData.year, monthNumber, 0).getDate();
            for (let i = 1; i <= dLast; i++) {
                if (
                    new Date(this.calendarData.year, monthNumber, i).getDay() !=
                    this.calendarData.dFirstMonth
                ) {
                    if (new Date().getDate() === i) {
                        a = { index: i, currentDay: true };
                    } else {
                        a = { index: i };
                    }
                    days[week].push(a);
                } else {
                    week++;
                    days[week] = [];
                    if (new Date().getDate() === i) {
                        a = { index: i, currentDay: true };
                    } else {
                        a = { index: i };
                    }
                    days[week].push(a);
                }
            }
            if (days[0].length > 0) {
                for (let i = days[0].length; i < 7; i++) {
                    days[0].unshift("");
                }
            }
            if (days[days.length - 1].length > 0) {
                for (let i = days[days.length - 1].length; i < 7; i++) {
                    days[days.length - 1].push("");
                }
            }
            return { days, monthTitle: this.getMonth(monthNumber) };
        },
        clickOnDay(index) {
            if (!this.firstInput) this.firstInput = index;
            else if (!this.secondInput) this.secondInput = index;
        },
    },
    mounted() {
        this.displayedMonths.push(this.generateCalendar(new Date().getMonth()));
        this.displayedMonths.push(this.generateCalendar(new Date().getMonth() + 1));
    },
};
export default DataPicker;
</script>

<style scoped>
.container {
    max-width: 940px;
    margin: 0 auto;
    background: #ffffff;
    padding: 54px 126px 200px;
    min-height: 100vh;
}
.title {
    text-align: center;
}
.title-text {
    margin-top: 23px;
    font-size: 16px;
    line-height: 150%;
    color: #292941;
    opacity: 0.5;
}
.title-date {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #292941;
}

.date-wrapper {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}
.date-input {
    padding: 18px 25px;
    border: 1.5px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 64px;
    border-radius: 13px;
    height: 55px;
    width: 329px;
    position: relative;
}
.date-input::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.2;
}
.days {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #292941;
    opacity: 0.2;
}
.date {
    background: #ffffff;
    border: 1.5px solid rgba(0, 0, 0, 0.05);
    border-radius: 13px;
    padding: 25px 20px 30px;
    position: relative;
}
.month-title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
}
.month-btn {
    color: #469bfc;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
}
.month-inner {
    margin-top: 25px;
}
.date-week {
    display: flex;
    text-align: center;
    margin: 0 0 26px;
}
.date-week:last-child {
    margin: 0;
}
.date-day {
    width: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    line-height: 18px;
    color: #292941;
    opacity: 0.5;
}
.date-btn {
    background: #469bfc;
    opacity: 0.5;
    border-radius: 13px;
    width: 329px;
    height: 55px;
    margin: 50px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
}
.selected-day {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
}
.selected-day::before {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    animation: grow 0.1s;
    background: #469bfc;
    border-radius: 50px;
}
.selected-day > p {
    position: relative;
    color: #fff;
}
@keyframes grow {
    0% {
        width: 0%;
        height: 0%;
    }
    100% {
        width: 100%;
        height: 100%;
    }
}
</style>
