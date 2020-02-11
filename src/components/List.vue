<template>
  <div class="MyList">{{message}}</div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      message: "List"
    };
  }
};
</script>
<style>
.MyList {
  font-size: 50px;
}
</style>