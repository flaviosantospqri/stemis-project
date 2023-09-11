<template>
  <div>
    <form class="container-search">
      <div class="input-container">
        <i class="fas fa-search">
          <fa icon="search" />
        </i>

        <input class="input-search" type="text" placeholder="Search" />
      </div>
    </form>
  </div>
</template>

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