<template>
    <div>
        <router-view> </router-view>
        <Footer />
    </div>
</template>

<script>
import Footer from "../../components/desktop/Footer";

let DesktopLayout = {
    components: {
        Footer,
    },
};
export default DesktopLayout;
</script>

<style></style>
