<template>
    <footer class="footer">
        <ul class="footer__ul">
            <li v-for="link in links" :key="link">
                <a href="#">{{ link }}</a>
            </li>
        </ul>
        <ul class="footer__ul second">
            <li>
                <a href="#">2020 Looplab LTD.</a>
            </li>
            <li>
                <div class="flag" :style="{ width: '14px', height: '15px' }">
                    <img src="@/../public/img/flag.png" />
                </div>

                <a href="#">Русский</a>
                <svg
                    class="arrow"
                    width="7"
                    height="4"
                    viewBox="0 0 7 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M3.8019 0.187352C3.83535 0.219754 3.86356 0.254887 3.88809 0.29184L6.45107 2.76585C6.70099 3.0072 6.70022 3.39792 6.44895 3.63833C6.1978 3.87873 5.79135 3.87787 5.54106 3.6364L3.3337 1.50577L1.10503 3.63798C0.853884 3.87839 0.447552 3.87753 0.197149 3.63606C0.0718876 3.51527 0.00971931 3.35714 0.0100806 3.19948C0.0104418 3.04183 0.0733345 2.88385 0.199148 2.7637L2.78536 0.289506C2.81005 0.252657 2.83842 0.217416 2.87202 0.185385C3.00045 0.0625013 3.1694 0.00345193 3.33737 0.00677774C3.50535 0.00416288 3.67391 0.0639264 3.8019 0.187352Z"
                        fill="#292941"
                    />
                </svg>
            </li>
        </ul>
    </footer>
</template>

<script>
const Footer = {
    name: "Footer",
    data: () => ({
        links: [
            "Как это работает?",
            "Вакансии",
            "Партнерская программа",
            "Перевод",
            "Помощь",
            "Юр. информация",
            "Блог",
        ],
    }),
};
export default Footer;
</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 114px;
    max-width: 940px;
    margin: 90px auto 0;
    background: #ffffff;
    border-radius: 13px 13px 0px 0px;
}
.footer__ul {
    width: 720px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 20px;
    padding: 0;
    list-style: none;
}
.footer__ul.second {
    width: 260px;
}
.footer__ul > li,
.footer__ul.second > li {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
}
.footer__ul > li > a,
.footer__ul.second > li > a {
    opacity: 0.5;
}
.flag {
    margin-right: 5px;
}
.arrow {
    margin-left: 10px;
}
</style>
