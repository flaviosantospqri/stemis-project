<template>
  <div class="btn-small" :class="colorScheme" v-if="small">
    <p v-if="!text"><fa icon="plus" /> New customer</p>
    <p v-else><fa :icon="icon" /> {{ text }}</p>
  </div>
  <div class="btn-medium" :class="colorScheme" v-if="medium">
    <p v-if="!text"><fa icon="plus" /> New customer</p>
    <p v-else><fa :icon="icon" /> {{ text }}</p>
  </div>
  <div class="btn-large" :class="colorScheme" v-if="large">
    <p v-if="!text"><fa icon="plus" /> New customer</p>
    <p v-else><fa :icon="icon" /> {{ text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  colorScheme: String,
  small: Boolean,
  medium: Boolean,
  large: Boolean,
  text: String,
  icon: String,
});
</script>

<style scoped>
.send {
  box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  background-color: #4e8266;
}
.btn-small {
  width: 40%;
  padding: 5px;
  max-width: 200px;
}
.btn-medium {
  width: 100%;
  padding: 5px;
  max-width: 350px;
}
p {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}
div {
  background-color: #074278;
  color: #ffffff;
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 60%;
  margin: 5px;
  border-radius: 4px;
  box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
}
div:hover {
  background-color: #ffffff;
  color: #074278;
}
</style>
