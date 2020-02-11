<template>
  <div>
    <div class="Home">{{message}}</div>
    <router-link to="List">列表</router-link>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Home",
  data() {
    return {
      message: "Home"
    };
  }
};
</script>
<style>
.Home {
  font-size: 50px;
}
</style>