<template>
  <div class="search">
    <input type="text" placeholder="请输入城市的名称或拼音" class="search-input" />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0.1rem;
}

.search-input {
  box-sizing: border-box;
  height: 0.62rem;
  line-height: 0.62rem;
  width: 100%;
  text-align: left;
  padding: 0.1rem;
  border-radius: 0.06rem;
  color: #666;
}
</style>