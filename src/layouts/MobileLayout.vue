<template>
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "../mobile/components/Header";

let MobileLayout = {
    name: "MobileLayout",
    components: {
        Header,
    },
};
export default MobileLayout;
</script>

<style scoped></style>
