<template>
  <div>
    <form class="container-search" @submit.prevent="searchPersons">
      <div class="input-container">
        <i class="fas fa-search"></i>
        <input
          class="input-search"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
        />
      </div>
    </form>
    <div>
      <router-link to="/register">New customer</router-link>
    </div>
    <List :list="filteredPersons" />
  </div>
</template>

<script>
import fetchApi from "../../services/api";
import Button from "./Button.vue";
import List from "./List.vue";

export default {
  data() {
    return {
      searchQuery: "",
      persons: [],
    };
  },
  async created() {
    await this.fetchPersons();
  },
  methods: {
    async fetchPersons() {
      try {
        const result = await fetchApi("/person/find-all", "GET");
        this.persons = result;
      } catch (error) {
        console.error("Error fetching persons:", error);
      }
    },
    searchPersons() {
      const query = this.searchQuery.toLowerCase();
    },
  },

  computed: {
    filteredPersons() {
      const query = this.searchQuery.toLowerCase();
      return this.persons.filter((person) =>
        person.name.toLowerCase().includes(query)
      );
    },
  },

  components: { List, Button },
};
</script>

<style scoped>
.container-search {
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2%;
}

.input-container {
  position: relative;
  width: 80%;
  display: inline-block;
}

.input-container i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.input-search {
  width: 80%;
  height: 3vh;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding-left: 30px;
}
</style>