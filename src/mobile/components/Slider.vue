<template>
  <div class="slider">
    <div
      v-for="(btn, index) of sliderBtn"
      :key="index"
      :style="{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.535677) 0%, rgba(0, 0, 0, 0.85) 100%)`,
      }"
      :class="`item ${activeBtn == index ? 'active' : ''}`"
      v-on:click="activeBtn = index"
    >
      {{ btn }}
    </div>
  </div>
</template>

<script>
const Slider = {
  data: () => ({
    activeBtn: 0,
    sliderBtn: ["Все", "Для создателей", "Для друзей", "Обновления"],
  }),
};
export default Slider;
</script>

<style scoped>
.slider {
  padding-left: 23px;
  height: 71px;
  overflow-x: scroll;
  background: transparent;
  display: flex;
  align-items: center;
}
.item {
  height: 41px;
  cursor: pointer;
  padding: 12px 15px 13px;
  border-radius: 50px;
  font-family: "Roboto";
  flex: none;
  align-items: center;
  color: #ffffff;
  transition: all 0.5s ease;
}
.item:nth-child(n + 2) {
  margin-left: 8px;
}
.item.active {
  background: #469bfc !important;
}
</style>
