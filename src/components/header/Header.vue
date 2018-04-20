<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img class="img_avatar" :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <icon-tag :iconSize="24" :iconType="seller.supports[0].type"></icon-tag>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="sell-icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="sell-icon icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="seller.name">
    </div>
    <transition name="fade">
      <header-detail v-show="detailShow" :seller="seller" v-on:onDetailShow="hideDetailShow" ></header-detail>
    </transition>
  </div>
</template>

<script>
import HeaderDetail from '@/components/header/HeaderDetail'
import iconTag from '@/components/iconTag/iconTag'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetailShow () {
      this.detailShow = false
    }
  },
  components: {
    'header-detail': HeaderDetail,
    'icon-tag': iconTag
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/style/init';
@path: '../../assets/images'; // 图片路径
.header{
  position: relative;
  color: #fff;
  background: rgba(7, 17, 27, .5);
  overflow: hidden;
  .content-wrapper{
    position: relative;
    padding: 48/@rem 24/@rem 36/@rem 48/@rem;
    display: flex;
    .img_avatar{
      width: 128/@rem;
      height: 128/@rem;
      border-radius: 4/@rem;
    }
    .avatar{
      width: 128/@rem;
      height: 128/@rem;
    }
    .content{
      flex: 1;
      padding: 4/@rem 0;
      margin-left: 32/@rem;
      .title{
        margin: 4/@rem 0 16/@rem;
        font-size: 0;
        .brand{
          display: inline-block;
          width: 60/@rem;
          height: 36/@rem;
          .bg-image('@{path}/brand');
          background-size: 60/@rem 36/@rem;
          margin-right: 12/@rem;
          vertical-align: top;
        }
        .name{
          display: inline-block;
          font-size: 32/@rem;
          font-weight: bold;
          line-height: 36/@rem;
        }
      }
      .description{
        font-size: 24/@rem;
        margin-bottom: 20/@rem;
        font-weight: 200;
        line-height: 24/@rem;
      }
      .support{
        font-size: 0;
        .text{
          display: inline-block;
          font-size: 20/@rem;
          font-weight: 200;
          line-height: 24/@rem;
          margin-left: 8/@rem;
          vertical-align: top;
          transform: translateY(-1/@rem);
        }
      }
    }
    .support-count{
        position: absolute;
        right: 24/@rem;
        bottom: 36/@rem;
        padding: 14/@rem 16/@rem;
        line-height: 24/@rem;
        border-radius: 28/@rem;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 20/@rem;
        color: #fff;
        font-weight: 200;
        .count{
          vertical-align: top;
          font-size: 20/@rem;
        }
        .icon-keyboard_arrow_right{
          font-size: 20/@rem;
          line-height: 24/@rem;
        }
      }
  }
  .bulletin-wrapper{
    display: flex;
    height: 56/@rem;
    align-items: center;
    padding:0 24/@rem 0;
    background-color: rgba(7, 17, 27, 0.2);
    .bulletin-title{
      display: block;
      width: 44/@rem;
      height: 24/@rem;
      .bg-image('@{path}/bulletin');
      background-repeat: no-repeat;
      background-size: 44/@rem 24/@rem;
      margin-right: 8/@rem;
    }
    .bulletin-text{
      flex: 1;
      font-size: 20/@rem;
      color:#fff;
      line-height: 56/@rem;
      margin-right: 8/@rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    text-align: center;
    filter: blur(10px)
  }
}
</style>
