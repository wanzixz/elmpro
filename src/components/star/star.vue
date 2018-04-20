<!-- 评价的星星组件 -->
<!-- eslint-disable-line -->
<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, key) in itemClasses" v-bind="{key}" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    data () {
      return {

      };
    },
    components: {

    },
    computed: {
      starType () {
        return 'star-' + this.size;
      },
      itemClasses () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2
        let hasDescimal = score % 1 !== 0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON)
        }
        if (hasDescimal) {
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF)
        }
        return result
      }
    }
  }
</script>

<style lang='less' scoped>
@path:'../../components/star'; // 图片路径
@import (reference) '../../assets/style/init';
.star{
  .star-item{
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48{
    .star-item{
      width: 40/@rem;
      height: 40/@rem;
      margin-right: 44/@rem;
      background-size: 40/@rem 40/@rem;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        .bg-image('@{path}/star48_on')
      }
      &.half{
        .bg-image('@{path}/star48_half')
      }
      &.off{
        .bg-image('@{path}/star48_off')
      }
    }
  }
  &.star-36{
    .star-item{
      width: 30/@rem;
      height: 30/@rem;
      margin-right: 12/@rem;
      background-size: 30/@rem 30/@rem;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        .bg-image('@{path}/star36_on')
      }
      &.half{
        .bg-image('@{path}/star36_half')
      }
      &.off{
        .bg-image('@{path}/star36_off')
      }
    }
  }
  &.star-24{
    .star-item{
      width: 20/@rem;
      height: 20/@rem;
      margin-right: 6/@rem;
      background-size: 20/@rem 20/@rem;
      &:last-child{
        margin-right: 0;
      }
      &.on{
        .bg-image('@{path}/star24_on')
      }
      &.half{
        .bg-image('@{path}/star24_half')
      }
      &.off{
        .bg-image('@{path}/star24_off')
      }
    }
  }

}
</style>
