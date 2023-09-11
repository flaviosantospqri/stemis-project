<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  path: "/",
  methods: {
    navigateToRegister() {
      this.$router.push("/register");
    },
  },
});
</script>

<template>
  <SearchVue />
  <div @click="navigateToRegister">
    <ButtonVue small />
  </div>
  <List />
</template>

<script setup>
import ButtonVue from "../structure/Button.vue";
import List from "../structure/List.vue";
import SearchVue from "../structure/Search.vue";
</script>

<style scoped>
</style>
