<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  path: "/",
});
</script>

<template>
  <SearchVue />
</template>

<script setup>
import ButtonVue from "../structure/Button.vue";
import List from "../structure/List.vue";
import SearchVue from "../structure/Search.vue";
</script>

<style scoped>
</style>
