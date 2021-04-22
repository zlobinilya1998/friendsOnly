<template>
  <main>
    <div class="container">
      <div class="about">
        <h2 class="about__title">О нас 🤘</h2>
        <hr class="about__hr" />
        <section class="about__section">
          <p class="about__section__text">
            Команда FriendsОnly создана небольшой группой специалистов, которые
            любят своё дело и всегда заряжены на результат.
          </p>
          <p class="about__section__text">
            Если вы хотите присоединиться к команде FriendsOnly, ознакомьтесь с
            актуальными вакансиями ниже.
          </p>
        </section>
      </div>
      <div class="vacanсy">
        <div v-for="(card, index) in cards" :key="index" class="vacanсy__card">
          <h3 class="vacanсy__card__title">{{ card.title }}</h3>
          <hr />
          <section class="vacanсy__card__responsibilities">
            <h4 class="vacanсy__card__responsibilities__title">
              Обязанности
            </h4>
            <p class="vacanсy__card__responsibilities__text">
              {{ card.responsibilities }}
            </p>
          </section>
          <section class="vacanсy__card__qualification">
            <h4 class="vacanсy__card__qualification__title">
              Предпочтительная квалификация
            </h4>
            <p class="vacanсy__card__qualification__text">
              {{ card.qualification }}
            </p>
          </section>
          <button class="vacanсy__card__btn">Отклинуться на вакансию</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: { cards: Array },
};
</script>

<style scoped>
.container {
  max-width: 940px;
  margin: 25px auto;
}
/*About */
.about {
  height: 208px;
  position: relative;
  padding: 20px 40px 50px 30px;
  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 8px;
}
.about__title {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
}

.about__section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 69px;
  margin-top: 36px;
}
.about__section__text {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  opacity: 0.5;
}

/*Vacancy */

.vacanсy {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.vacanсy__card {
  margin-top: 20px;
  width: 460px;
  padding: 20px 30px 30px 30px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
}
.vacanсy__card__title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
}
.vacanсy__card__responsibilities {
  margin-top: 36px;
}
.vacanсy__card__responsibilities__title {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 165%;
}
.vacanсy__card__responsibilities__text {
  margin-top: 4px;
  opacity: 0.5;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 165%;
}
.vacanсy__card__qualification {
  margin-top: 20px;
}
.vacanсy__card__qualification__title {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 165%;
}
.vacanсy__card__qualification__text {
  margin-top: 4px;
  opacity: 0.5;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 165%;
}
.vacanсy__card__btn {
  margin-top: 50px;
  height: 55px;
  width: 100%;
  background: #469bfc;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 165%;
}
</style>
