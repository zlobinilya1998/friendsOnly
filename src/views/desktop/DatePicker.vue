<template>
    <div>
        <Header />
        <div class="container">
            <router-link to="/desktop" tag="div" class="btn-back">
                <svg
                    width="5"
                    height="9"
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="1"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.97949 8.82102L0.175092 4.9321C-0.0583645 4.69346 -0.0583645 4.30654 0.175092 4.0679L3.97949 0.178982C4.21294 -0.059661 4.59145 -0.0596609 4.82491 0.178982C5.05836 0.417625 5.05836 0.804543 4.82491 1.04319L1.44322 4.5L4.82491 7.95681C5.05836 8.19546 5.05836 8.58237 4.82491 8.82102C4.59145 9.05966 4.21294 9.05966 3.97949 8.82102Z"
                        fill="#292941"
                        fill-opacity="1"
                    />
                </svg>
                Назад
            </router-link>
            <div class="title">
                <h2 class="title-date">Выбрать даты</h2>
                <p class="title-text">Telegram</p>
            </div>
            <div class="input-wrapper">
                <div class="input-container">
                    <input
                        disabled
                        :value="inputStartValue"
                        type="text"
                        placeholder="Выберите первую дату "
                        class="date-input"
                    />
                    <transition name="fade">
                        <svg
                            v-if="inputs.start"
                            @click="inputs.start = ''"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="8.5" cy="8.5" r="8.5" fill="black" fill-opacity="0.1" />
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M9.43501 8.50017L11.1881 6.74711C11.3818 6.55341 11.3818 6.23939 11.1881 6.046L10.9544 5.81229C10.7606 5.61854 10.4466 5.61854 10.2532 5.81229L8.5002 7.56529L6.74714 5.81193C6.55344 5.61823 6.23942 5.61823 6.04603 5.81193L5.81196 6.04563C5.61826 6.23939 5.61826 6.55341 5.81196 6.74681L7.56532 8.50017L5.81232 10.2532C5.61857 10.4469 5.61857 10.7609 5.81232 10.9543L6.04603 11.188C6.23972 11.3817 6.55375 11.3817 6.74714 11.188L8.5002 9.43498L10.2532 11.188C10.4469 11.3817 10.761 11.3817 10.9544 11.188L11.1881 10.9543C11.3818 10.7606 11.3818 10.4466 11.1881 10.2532L9.43501 8.50017Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width="5.66667"
                                        height="5.66667"
                                        fill="white"
                                        transform="translate(5.66669 5.66666)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </transition>
                </div>
                <div class="input-container">
                    <input
                        disabled
                        :value="inputEndValue"
                        type="text"
                        placeholder="Выберите вторую дату "
                        class="date-input"
                    />
                    <transition name="fade">
                        <svg
                            v-if="inputs.end"
                            @click="inputs.end = ''"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="8.5" cy="8.5" r="8.5" fill="black" fill-opacity="0.1" />
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M9.43501 8.50017L11.1881 6.74711C11.3818 6.55341 11.3818 6.23939 11.1881 6.046L10.9544 5.81229C10.7606 5.61854 10.4466 5.61854 10.2532 5.81229L8.5002 7.56529L6.74714 5.81193C6.55344 5.61823 6.23942 5.61823 6.04603 5.81193L5.81196 6.04563C5.61826 6.23939 5.61826 6.55341 5.81196 6.74681L7.56532 8.50017L5.81232 10.2532C5.61857 10.4469 5.61857 10.7609 5.81232 10.9543L6.04603 11.188C6.23972 11.3817 6.55375 11.3817 6.74714 11.188L8.5002 9.43498L10.2532 11.188C10.4469 11.3817 10.761 11.3817 10.9544 11.188L11.1881 10.9543C11.3818 10.7606 11.3818 10.4466 11.1881 10.2532L9.43501 8.50017Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width="5.66667"
                                        height="5.66667"
                                        fill="white"
                                        transform="translate(5.66669 5.66666)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </transition>
                </div>
            </div>
            <div class="date-wrapper">
                <div v-for="(month, index) of displayedMonths" :key="`${month}_${index}`">
                    <div class="date">
                        <div class="days">
                            <div v-for="(day, index) in weekDays" :key="`${day}_${index}`">
                                {{ day }}
                            </div>
                        </div>
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
                                    <p :style="{ cursor: day.index === '' ? 'none' : ' pointer' }">
                                        {{ day.index }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                :disabled="!inputs.start && !inputs.end"
                class="date-btn"
                :style="{ opacity: inputs.start && inputs.end ? '1' : '0.5' }"
            >
                Подтвердить выбор
            </button>
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
        highlightSelectedRange() {
            let items = document.querySelectorAll(".selected-day");
            items.forEach((item) => item.classList.remove("side-day"));
            items[0].classList.add("side-day");
            items[items.length - 1].classList.add("side-day");
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
            if (this.inputs.end && date >= this.inputs.end) return;
            if (!this.inputs.start) this.inputs.start = date;
            else if (!this.inputs.end && this.inputs.start < date) this.inputs.end = date;
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
            handler(observer) {
                if (observer.start && observer.end) {
                    this.dataRange(true);
                    this.$nextTick(this.highlightSelectedRange);
                } else this.dataRange(false);
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
export default DataPicker;
</script>

<style scoped>
svg {
    cursor: pointer;
}
.btn-back {
    position: fixed;
    left: 27px;
    top: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    opacity: 0.5;
}
.btn-back > svg {
    margin: 0 15px 0 0;
}
.container {
    max-width: 940px;
    margin: 0 auto;
    background: #ffffff;
    padding: 54px 126px 200px;
    min-height: 100vh;
    position: relative;
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
.input-container {
    position: relative;
    display: flex;
}
.input-container > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.date-input {
    padding: 18px 25px;
    border: 1.5px solid rgba(0, 0, 0, 0.05);
    border-radius: 13px;
    height: 55px;
    width: 329px;
    position: relative;
}
.date-input:disabled {
    background: transparent;
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
    padding: 0 28px;
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
    min-height: 335px;
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

.date-week {
    display: flex;
    text-align: center;
    margin: 0 0 25px;
    border-radius: 150px;
}
.date-week:first-child {
    margin: 25px 0;
}

.date-week:last-child {
    margin: 0;
}
.date-day {
    display: flex;
    flex: 1;
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
    border-radius: 13px;
    width: 329px;
    height: 55px;
    margin: 50px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
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

.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}
.fade-enter {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-to {
    opacity: 0;
}
</style>
