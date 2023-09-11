<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Register",
  path: "/register",
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    sendInformations(values) {
      console.log(values);
    },
  },
});
</script>

<template>
  <h1>add customer</h1>
  <div class="container-register">
    <form>
      <input
        type="text"
        name="birthdate"
        id="birthdate"
        placeholder="Birthdate"
      />
      <input type="text" name="name" id="name" placeholder="Name" />
      <ButtonVue medium text="Register" colorScheme="send" />
    </form>
  </div>
  <div @click="navigateToHome">
    <ButtonVue
      onSubmit="{{sendInformations(data)}}"
      small
      text="Return"
      icon="arrow-left"
    />
  </div>
</template>

<script setup>
import ButtonVue from "../structure/Button.vue";
import SearchVue from "../structure/Search.vue";
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin-left: 2%;
}
.container-register {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50vh;
}
form {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 50%;
  flex-direction: column;
}
input {
  width: 50%;
  min-width: 300px;
  height: 30px;
  padding: 5px;
  max-width: 350px;
  border-radius: 4px;
  border: 1px solid grey;
}
</style>
