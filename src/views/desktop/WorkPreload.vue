<template>
    <div class="vacanсy">
        <div v-for="(card, index) in cards" :key="index" class="vacanсy__card">
            <div class="pageTotalLoad"></div>

            <h3 class="vacanсy__card__title"></h3>
            <hr />
            <section v-for="item in 2" :key="item" class="vacanсy__card__responsibilities">
                <p class="vacanсy__card__responsibilities__title"></p>
                <p :style="{ marginTop: '20px' }" class="vacanсy__card__responsibilities__text"></p>
                <p
                    :style="{ marginTop: '17px' }"
                    class="vacanсy__card__responsibilities__subtext"
                ></p>
                <p :style="{ marginTop: '17px' }" class="vacanсy__card__responsibilities__text"></p>
            </section>
            <button class="vacanсy__card__btn"></button>
        </div>
    </div>
</template>

<script>
const WorkPreload = {
    name: "WorkPreload",
    props: {
        cards: Array,
    },
};
export default WorkPreload;
</script>

<style scoped>
/*Vacancy */

.vacanсy__card {
    margin-top: 20px;
    width: 460px;
    padding: 27px 30px 30px;
    position: relative;
    background: #ffffff;
    border-radius: 8px;
    overflow: hidden;
}
.vacanсy__card__title {
    height: 15px;
    width: 180px;
    background: #dbdbdb;
    border-radius: 50px;
}
.vacanсy__card__responsibilities {
    margin-top: 36px;
}

.vacanсy__card__responsibilities__title {
    width: 105px;
    height: 12px;
    background: #e3e3e3;
    border-radius: 50px;
}
.vacanсy__card__responsibilities__text {
    width: 365px;
    height: 8px;
    background: #f0f0f0;
    border-radius: 50px;
}

.vacanсy__card__responsibilities__subtext {
    width: 317px;
    height: 8px;
    background: #f0f0f0;
    border-radius: 50px;
}
.vacanсy__card__qualification {
    margin-top: 20px;
}
.vacanсy__card__qualification__text {
    margin-top: 4px;
    opacity: 0.5;
}
.vacanсy__card__btn {
    margin-top: 57px;
    height: 55px;
    width: 100%;
    background: #dbdbdb;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 165%;
}
</style>
