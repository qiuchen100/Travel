<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-back">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background: $bgColor;
  color: #fff;
  font-size: 0.32rem;
}

.header-back {
  position: absolute;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  top: 0;
  left: 0;
  color: #fff;
}
</style>
