<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import (reference) './assets/style/init';

body {
  background-color: #fbf9fe;
  font-size:22/@rem;
  line-height: 1;
}
</style>
