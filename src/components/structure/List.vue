<template>
  <div class="container-list">
    <div class="container-title">
      <h1>CUSTOMERS</h1>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else class="container-response-api">
      <div v-if="error">{{ error }}</div>
      <ul v-else class="list">
        <Card v-for="person in list" :key="person.uuid" :person="person">
        </Card>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";

const { list } = defineProps({
  list: [],
});
console.log(list);
</script>

<style scoped>
.container-list {
  background-color: #fafafd;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.container-title {
  align-self: flex-start;
  margin-left: 5%;
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
}
.container-response-api {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>