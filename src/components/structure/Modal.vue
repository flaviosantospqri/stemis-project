<template>
  <div class="modal-background">
    <div class="modal-content">
      <div @click="close">
        <header>
          <span> </span>
          <fa class="close-icon" icon="x"></fa>
        </header>
      </div>
      <div>
        <section v-if="person.addresses.length > 0">
          <h3>{{ person.name }}'s address information</h3>
          <p>City: {{ person.addresses[0].city }}</p>
          <p>Street: {{ person.addresses[0].publicPlace }}</p>
          <p>Number: {{ person.addresses[0].number }}</p>
          <p>ZipCode: {{ person.addresses[0].zipCode }}</p>
        </section>
        <section v-else>
          <p>There is no registered andress yet</p>
          <p class="text-add-house">
            Add<fa class="house-user" icon="house" />
          </p>
        </section>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  name: "Modal",
  person: {
    name: String,
    birthDate: String,
    addresses: {
      publicPlace: String,
      zipCode: String,
      number: Number,
      city: String,
    },
  },
});

const emits = defineEmits();

const close = () => {
  emits("close");
};
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.text-add-house {
  font-size: 1rem;
  width: 60px;
  display: flex;
  justify-content: space-around;
}
.modal-content {
  background-color: #ffffff;
  padding: 20px;
  min-width: 250px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 600px;
  width: 80%;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10%;
  min-width: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
}

.close-icon:hover {
  color: #ff0000;
}
</style>