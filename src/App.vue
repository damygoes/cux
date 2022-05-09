<template>
  <MainNavBar />
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

// Import Components
import MainNavBar from "./components/MainNavBar.vue";

export default {
  data() {
    return {};
  },
  components: {
    MainNavBar: MainNavBar,
  },
};
</script>

<style lang="scss" scoped></style>
