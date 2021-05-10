<template>
    <div class="container">
        <div class="header">
            <svg
                @click="goBack"
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

        <div class="container">
            <div class="date-wrapper">
                <div class="days">
                    <div v-for="(day, index) in weekDays" :key="`${day}_${index}`">
                        {{ day }}
                    </div>
                </div>
                <div v-for="(month, index) of displayedMonths" :key="`${month}_${index}`">
                    <div class="date">
                        <div
                            :style="{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }"
                        >
                            <h4 class="month-title">{{ month.monthTitle }}</h4>
                            <p @click="selectAllMonth(month.month)" class="month-btn">Весь месяц</p>
                        </div>
                        <div class="month-inner">
                            <div
                                class="date-week"
                                v-for="(week, index) in month.days"
                                :key="`${week}_${index}`"
                            >
                                <div
                                    @click="clickOnDay(month.month, day.index)"
                                    class="date-day"
                                    ref="selectedDay"
                                    :class="{ 'selected-day': day.status }"
                                    v-for="(day, index) in week"
                                    :key="index"
                                >
                                    <p>
                                        {{ day.index }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="date-btn"
                    :style="{ opacity: inputs.start && inputs.end ? '1' : '0.5' }"
                >
                    Подтвердить выбор
                </button>
            </div>
        </div>
    </div>
</template>

<script>
const DatePicker = {
    data: () => ({
        inputs: {
            start: null,
            end: null,
        },
        displayedMonths: [],
        weekDays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
        test: null,
    }),
    methods: {
        getSelector() {
            let elem = document.querySelectorAll(".selected-day");
            elem.forEach((item) => item.classList.remove("side-day"));
            if (elem) {
                elem[0].classList += " side-day";
                elem[elem.length - 1].classList += " side-day";
            }
        },
        dataRange(flag) {
            this.displayedMonths.forEach((month) => {
                month.days.forEach((week) => {
                    week.forEach((day) => {
                        if (!day.index) return;
                        if (!flag) {
                            day.status = flag;
                            return;
                        }
                        const date = new Date(month.month.getTime());
                        date.setDate(day.index);
                        if (this.inputs.start <= date && this.inputs.end >= date) {
                            day.status = flag;
                        } else day.status = false;
                    });
                });
            });
        },
        selectAllMonth(month) {
            const date1 = new Date(month.getTime());
            date1.setDate(1);
            this.inputs.start = date1;

            const date2 = new Date(month.getTime());
            date2.setMonth(month.getMonth() + 1);
            date2.setDate(0);
            this.inputs.end = date2;
            setTimeout(this.getSelector, 0);
        },
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
            // последней в конец
            fillWeek(month[0], true);
            fillWeek(month[month.length - 1], false);

            return { days: month, monthTitle: this.getMonth(dt.getMonth()), month: dt };
        },
        clickOnDay(month, index) {
            if (!index) return;
            const date = new Date(month.getTime());
            date.setDate(index);
            if (!this.inputs.start) this.inputs.start = date;
            else if (!this.inputs.end && this.inputs.start < date) this.inputs.end = date;
        },
        goBack() {
            this.$router.push("/mobile");
        },
    },
    computed: {
        inputStartValue() {
            return this.inputs.start
                ? this.inputs.start.toLocaleString("default", { month: "long", day: "numeric" })
                : "";
        },
        inputEndValue() {
            return this.inputs.end
                ? this.inputs.end.toLocaleString("default", { month: "long", day: "numeric" })
                : "";
        },
    },
    watch: {
        inputs: {
            deep: true,
            handler(newValue) {
                if (newValue.start && newValue.end) {
                    this.dataRange(true);
                } else this.dataRange(false);
                setTimeout(this.getSelector, 0);
            },
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
export default DatePicker;
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
    color: #292941;
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
.days {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 41px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #292941;
    opacity: 0.2;
}
.date-wrapper {
    padding: 0 23px;
}
.date {
    background: #ffffff;
    border-radius: 13px;
    padding: 25px 20px 30px;
    margin: 0 0 10px;
}
.date-week {
    display: flex;
    justify-content: space-between;
    height: 17px;
    margin: 26px 0 0;
}
.date-week:first-child {
    margin: 26px 0 0;
}
.date-day {
    width: 21px;
    text-align: center;
    font-size: 15px;
    line-height: 18px;
    color: #292941;
    opacity: 0.5;
}
.month-wrapper {
    display: flex;
    justify-content: space-between;
}
.month-title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #292941;
}
.month-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #469bfc;
}
.date-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #469bfc;
    border-radius: 13px;
    margin: 18px 0 30px;
    color: #ffffff;
    cursor: pointer;
}
.selected-day {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #469bfc;
    opacity: 1;
}

.selected-day > p {
    position: relative;
    color: #469bfc;
}
.side-day > p {
    color: rgb(250, 249, 246);
    position: relative;
}
.side-day::before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    background: #469bfc;
    border-radius: 150px;
}
</style>
