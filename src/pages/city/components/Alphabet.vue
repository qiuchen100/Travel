<template>
  <ul class="list">
    <li class="item" v-for="(partCities, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    cities: {}
  },
  name: "CityAlphabet"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.44rem;
    color: $bgColor;
  }
}
</style>
