<template>
    <div class="container-inner">
        <div v-if="messageSuccessFully" class="successfully-message">
            <p>Your message has been sent successfully</p>
        </div>
        <div class="title-wrapper">
            <svg
                width="33"
                height="37"
                viewBox="0 0 33 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M30.659 14.9421H29.8224V11.5679C29.8224 5.32697 24.0754 0.113569 16.8924 0.00228051C16.6961 -0.00076017 16.3039 -0.00076017 16.1077 0.00228051C8.9245 0.113569 3.1776 5.32697 3.1776 11.5679V14.9421H2.34092C1.05164 14.9421 0 16.0886 0 17.5046V34.4284C0 35.8428 1.05164 37 2.34101 37H30.659C31.9483 37 33 35.8428 33 34.4284V17.5046C33 16.0887 31.9484 14.9421 30.659 14.9421ZM19.153 25.9493V31.0631C19.153 31.6486 18.5841 32.1442 17.9041 32.1442H15.096C14.4159 32.1442 13.8471 31.6486 13.8471 31.0631V25.9493C13.1875 25.3898 12.8035 24.6162 12.8035 23.7604C12.8035 22.1387 14.2582 20.7451 16.1078 20.6807C16.3038 20.6739 16.6964 20.6739 16.8924 20.6807C18.742 20.7451 20.1967 22.1387 20.1967 23.7604C20.1965 24.6162 19.8126 25.3898 19.153 25.9493ZM24.3084 14.9421H16.8924H16.1077H8.69171V11.5679C8.69171 7.85028 12.1975 4.77638 16.5 4.77638C20.8025 4.77638 24.3085 7.85028 24.3085 11.5679V14.9421H24.3084Z"
                    fill="white"
                />
            </svg>
            <h4 class="title">Only Fans For</h4>
        </div>
        <div class="text-wrapper">
            <p class="text">
                Welcome to Only Fans For. we are the only real provider of Only Fans For.
            </p>
            <p class="text">We're here to help you reach your full potential.</p>
        </div>
        <div class="login-wrapper">
            <h4 class="login-title">Send us a message</h4>
            <input class="input" v-model="inputs.name" placeholder="Your name" type="text" />
            <input class="input" v-model="inputs.email" placeholder="Email" type="text" />
            <textarea
                class="input message"
                v-model="inputs.message"
                placeholder="Message"
                type="text"
            />
            <button class="btn">Send</button>
        </div>
        <div class="img-wrapper">
            <img src="../../../public/img/login.png" />
        </div>
        <p v-if="!messageSuccessFully" class="text-bottom">2021 Only Fans For</p>
    </div>
</template>

<script>
const LoginPage = {
    name: "LoginPage",
    data: () => ({
        messageSuccessFully: false,
        inputs: {
            name: "",
            email: "",
            message: "",
        },
    }),
};
export default LoginPage;
</script>

<style scoped>
p,
h4 {
    color: #fff;
}
p {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}
h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}
p,
h4,
input,
textarea,
button {
    font-family: "Roboto";
}
textarea {
    min-width: 100%;
    max-width: 100%;
}
.container-inner {
    padding: 40px 0;
    min-height: 100vh;
    max-width: 816px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
}
.successfully-message {
    min-width: 525px;
    height: 61px;
    position: absolute;
    background: #ffffff;
    border-radius: 15px;
    left: 50%;
    top: 120px;
    transform: translateX(-50%);
    padding: 16px 25px;
}
.successfully-message > p {
    color: #333333;
}
.title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
.title {
    margin-left: 18px;
}
.text-wrapper {
    margin-top: 55px;

    text-align: center;
}
.text:nth-child(1) {
    margin-top: 55px;
}
.text:nth-child(2) {
    margin-top: 20px;
}
.login-wrapper {
    text-align: center;
    display: flex;
    width: 535px;
    margin: 55px auto 0px;
    flex-direction: column;
}

.input {
    margin-top: 18px;
    height: 70px;
    padding: 21px 20px 20px 25px;
    background: #ffffff;
    border-radius: 15px;
    color: #c1c1c1;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}
.input::placeholder,
textarea::placeholder {
    color: #c1c1c1;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}
.input.message {
    min-height: 130px;
}
.img-wrapper {
    width: 177px;
    height: 82px;
    margin: 100px auto 0px;
}
.btn {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    margin-top: 21px;
    transition: all 0.3s ease-in;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}
.btn:hover {
    background: #0076ff;
}
.text-bottom {
    text-align: center;
}
</style>
