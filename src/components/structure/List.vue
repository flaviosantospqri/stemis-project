<script setup>
import { ref, onMounted } from "vue";
import fetchApi from "../../services/api";
import Card from "./Card.vue";

const persons = ref([]);
const loading = ref(true);
const error = (ref < String) | (null > null);

const getData = async () => {
  try {
    const result = await fetchApi("/person/find-all", "GET");
    persons.value = result;
    loading.value = false;
  } catch (err) {
    error.value = "Error: " + err;
    loading.value = false;
  }
};

onMounted(getData);
</script>
<template>
  <div class="container-list">
    <div class="container-title">
      <h1>CUSTOMERS</h1>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else class="container-response-api">
      <div v-if="error">{{ error }}</div>
      <ul v-else class="list">
        <Card
          v-for="person in persons"
          :key="person.uuid"
          :person="person"
        ></Card>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container-list {
  background-color: #fafafd;
  display: flex;
  align-items: center;
  height: 100vh;
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
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>