<template>
  <li class="container-card" @click="callModal">
    <span> Name: {{ person.name }}</span
    ><br />
    <span> Birthdate: {{ person.birthDate }}</span>
  </li>
  <div>
    <ModalVue v-if="isShowModal" @close="close" :person="person" />
  </div>
</template>

<script setup>
import ModalVue from "./Modal.vue";
import { defineProps, ref } from "vue";

const props = defineProps({
  name: String,
  person: {
    name: String,
    birthDate: String,
    addresses: Object,
  },
});

const isShowModal = ref(false);

const close = () => {
  isShowModal.value = false;
};

const callModal = () => {
  isShowModal.value = true;
};
</script>

<style scoped>
.container-card {
  cursor: pointer;
  height: 150px;
  box-shadow: 0px 11px 10px -10px rgba(0, 0, 0, 0.75);
  list-style: none;
  border-radius: 4px;
  background-color: #ffffff;
  width: 80%;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 5%;
  padding: 20px;
  font-size: 1.5rem;
}
</style>