<script setup>
</script>


<template>
  <div class="content">
    <div class="container-header">
      <div class="container-img">
        <img
          class="img-logo"
          src="../../assets/img/stemisLogo.png"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <p>customer management</p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  name: "Header",
});
</script>
<style scoped>
p {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
}
.content {
  background-color: #4e6982;
  color: #ffffff;
  padding: 2%;
  box-shadow: 10px 10px 11px -14px rgba(0, 0, 0, 0.75);
}
.container-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container-img {
  width: 20%;
  min-width: 150px;
}
.img-logo {
  width: 90%;
  max-width: 300px;
}
</style>
