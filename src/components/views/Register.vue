
<template>
  <div>
    <h1>add customer</h1>
    <div class="container-register">
      <form @submit="submitForm">
        <div>
          <input
            type="text"
            v-model="formData.birthDate"
            name="birthDate"
            id="birthDate"
            placeholder="birthDate"
          />
          <span class="error">{{ errors.birthDate }}</span>
        </div>
        <div>
          <input
            type="text"
            v-model="formData.name"
            name="name"
            id="name"
            placeholder="Name"
          />
          <span class="error">{{ errors.name }}</span>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  <router-link to="/">Home</router-link>
</template>

<script setup>
import { ref } from "vue";
import * as yup from "yup";
import fetchApi from "../../services/api";
import { useRouter } from "vue-router";
const formData = ref({
  birthDate: "",
  name: "",
});

const schema = yup.object().shape({
  birthDate: yup.string().required("Birthdate is required"),
  name: yup.string().required("Name is required"),
});

const errors = ref({
  birthDate: "",
  name: "",
});

const submitForm = async (event) => {
  event.preventDefault();

  for (const key in errors.value) {
    errors.value[key] = "";
  }

  try {
    await schema.validate(formData.value, { abortEarly: false });
    console.log("Form data:", formData.value);

    try {
      const response = await fetchApi("/person", "POST", formData.value);
      if (response.uuid !== null) {
        this.$router.push({ name: "Home" });
      }
      if (response && response.error) {
        throw new Error(response.error);
      }

      sendInformations(formData.value);
    } catch (apiError) {
      console.error("API Error:", apiError.message);
    }
  } catch (validationErrors) {
    if (validationErrors.inner) {
      validationErrors.inner.forEach((error) => {
        errors.value[error.path] = error.message;
      });
    } else {
      console.error("Validation error:", validationErrors);
    }
  }
};
</script>

<style scoped >
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
.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
}
</style>