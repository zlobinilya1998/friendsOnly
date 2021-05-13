<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
const NewsLayout = {
    name: "NewsLayout",
};
export default NewsLayout;
</script>

<style scoped>
.content {
    max-width: 600px;
    margin: 0 auto;
}
</style>
