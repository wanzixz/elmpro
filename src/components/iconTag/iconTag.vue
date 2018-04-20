<!-- iconTag 图标组件 -->

<template>
  <span :class="classSet"></span>
</template>

<script>
export default {
  // 通过iconType变量传入数据
  props: {
    iconSize: {
      type: Number
    },
    iconType: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  computed: {
    classSet () { // 动态设置样式名称
      return 'iconTag-' + this.iconSize + ' ' + this.classMap[this.iconType]
    }
  }
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/style/init';
@path: '../../assets/images'; // 图片路径
.iconTag-24{
  display: inline-block;
  width: 24/@rem;
  height: 24/@rem;
  &.decrease{
    .bg-image('@{path}/decrease_1');
  }
  &.discount{
    .bg-image('@{path}/discount_1');
  }
  &.guarantee{
    .bg-image('@{path}/guarantee_1');
  }
  &.invoice{
    .bg-image('@{path}/invoice_1');
  }
  &.special{
    .bg-image('@{path}/special_1');
  }
  background-size: 24/@rem 24/@rem;
  vertical-align: top;
  overflow: hidden;
}
.iconTag-32{
  display: inline-block;
  width: 32/@rem;
  height: 32/@rem;
  &.decrease{
    .bg-image('@{path}/decrease_1');
  }
  &.discount{
    .bg-image('@{path}/discount_1');
  }
  &.guarantee{
    .bg-image('@{path}/guarantee_1');
  }
  &.invoice{
    .bg-image('@{path}/invoice_1');
  }
  &.special{
    .bg-image('@{path}/special_1');
  }
  background-size: 32/@rem 32/@rem;
    background-repeat: no-repeat;
  vertical-align: middle;
  overflow: hidden;
}
</style>
