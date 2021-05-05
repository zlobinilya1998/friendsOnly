<template>
    <div>
        <Header />
        <div class="container">
            <div class="title">
                <h2 class="title-date">Выбрать даты</h2>
                <p class="title-text">Telegram</p>
            </div>
            <div class="input-wrapper">
                <input
                    v-model="inputs.start"
                    type="text"
                    placeholder="Выберите первую дату "
                    class="date-input"
                />
                <input
                    v-model="inputs.end"
                    type="text"
                    placeholder="Выберите вторую дату "
                    class="date-input"
                />
            </div>
            <div class="date-wrapper">
                <div v-for="month of displayedMonths" :key="month">
                    <div class="date">
                        <div class="days">
                            <div v-for="day in weekDays" :key="day">{{ day }}</div>
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
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";
import Footer from "@/components/desktop/Footer";

let DataPicker = {
    name: "DataPicker",
    components: {
        Header,
        Footer,
    },
    data: () => ({
        inputs: {
            start: null,
            end: null,
        },
        displayedMonths: [],
        weekDays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
    }),
    methods: {
        getMonth(month) {
            let today = new Date();
            today.setMonth(month);

            const value = today.toLocaleString("default", { month: "long", year: "numeric" });

            // В русской локали для года добавляется " г.", например "2021 г."
            if (navigator.languages[0] === "ru") return value.slice(0, -3);
            return value;
        },
        generateCalendar(dt) {
            // Заполняет неделю пустыми элементами
            function fillWeek(week, fillFront) {
                if (week.length > 0) {
                    for (let i = week.length; i < 7; i++) {
                        if (fillFront) week.unshift("");
                        else week.push("");
                    }
                }
            }

            // Массив недель
            let month = [];
            let weekNumber = 0;
            month[weekNumber] = [];

            const lastDay = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
            for (let i = 1; i <= lastDay; i++) {
                const tmpDt = new Date(dt.getFullYear(), dt.getMonth(), i);

                // При начале новой недели, мы хотим создать новый массив на эту неделю
                if (tmpDt.getDay() === 1) {
                    weekNumber++;
                    month[weekNumber] = [];
                }

                month[weekNumber].push({ index: i });
            }

            // Забиваем недели пустышками: для первой недели мы добавляем пустышки в начало, а для
            // последней в конец.
            fillWeek(month[0], true);
            fillWeek(month[month.length - 1], false);

            return { days: month, monthTitle: this.getMonth(dt.getMonth()), month: dt };
        },
        clickOnDay(index) {
            if (!index) return;
            if (!this.inputs.start) this.inputs.start = index;
            else if (!this.inputs.end) this.inputs.end = index;
        },
    },
    mounted() {
        let start = new Date();
        this.displayedMonths.push(this.generateCalendar(start));

        let end = new Date();
        end.setMonth(end.getMonth() + 1);
        this.displayedMonths.push(this.generateCalendar(end));
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
.input-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 60px 0 0;
}
.date-wrapper {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}
.date-input {
    padding: 18px 25px;
    border: 1.5px solid rgba(0, 0, 0, 0.05);
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
    width: 329px;
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

.footer {
    margin: 1px auto 0px;
    border-radius: 0px;
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
