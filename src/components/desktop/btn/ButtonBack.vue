<template>
  <div class="btn" @click="backToMain">
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.97949 8.82102L0.175092 4.9321C-0.0583645 4.69346 -0.0583645 4.30654 0.175092 4.0679L3.97949 0.178982C4.21294 -0.059661 4.59145 -0.0596609 4.82491 0.178982C5.05836 0.417625 5.05836 0.804543 4.82491 1.04319L1.44322 4.5L4.82491 7.95681C5.05836 8.19546 5.05836 8.58237 4.82491 8.82102C4.59145 9.05966 4.21294 9.05966 3.97949 8.82102Z"
        fill="#292941"
        fill-opacity="0.5"
      />
    </svg>
    Назад
  </div>
</template>

<script>
export default {
  name: "ButtonBack",
  props: {
    route: String,
  },
  methods: {
    backToMain() {
      this.$router.push(`/${this.route}`);
    },
  },
};
</script>

<style scoped>
.btn {
  position: absolute;
  top: 95px;
  left: 27px;
  width: 61px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
</style>
