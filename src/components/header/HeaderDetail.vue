<template>
  <div class="header-detail">
    <div class="detail-wapper clearfix">
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul class="support" v-if="seller.supports">
          <li class="support-item" v-for="item in seller.supports">
            <icon-tag :iconSize="32" :iconType="item.type"></icon-tag>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{seller.bulletin}}</p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="hideDetail">
      <i class="icon-close"></i>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
import iconTag from '@/components/iconTag/iconTag'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    star,
    'icon-tag': iconTag
  },
  methods: {
    hideDetail () { // 关闭弹层
      this.$emit('onDetailShow')
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/style/init';
@path: '../../assets/images'; // 图片路径
  .header-detail{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(7, 17, 27, .8);
    -webkit-backdrop-filter: blur(10px);
    overflow-y: auto;
    .detail-wapper{
      width: 100%;
      min-height: 100%;
      .detail-main{
        margin-top: 128/@rem;
        padding-bottom: 128/@rem;
        .name{
          text-align: center;
          font-size: 32/@rem;
          font-weight: 700;
          color: #fff;
          line-height: 32/@rem;
        }
        .star-wapper{
          margin: 32/@rem auto 0;
          text-align: center;
        }
        .title{
          width: 80%;
          margin:56/@rem auto 48/@rem;
          display: flex;
          align-items: center;
          .line{
            flex: 1;
            border:1/@rem solid rgba(255,255,255,.2);
          }
          .text{
            padding:0 24/@rem;
            font-size: 24/@rem;
            font-weight: 700;
          }
        }
        .support{
          font-size: 0;
          width: 80%;
          margin: 0 auto;
          .support-item{
            padding:0 24/@rem;
            margin-bottom: 24/@rem;
            &:last-child{
              margin-bottom: 0;
            }
          }
          .text{
            display: inline-block;
            font-size: 24/@rem;
            font-weight: 200;
            line-height: 24/@rem;
            vertical-align: middle;
            margin-left: 12/@rem;
          }
        }
        .bulletin{
          width: 80%;
          margin: 0 auto;
          .content{
            padding: 0 24/@rem;
            font-size: 24/@rem;
            color: #fff;
            font-weight: 200;
            line-height: 48/@rem;
          }
        }
      }
    }
    .detail-close{
      position: relative;
      margin: -128/@rem auto 0;
      width: 64/@rem;
      height: 64/@rem;
      font-size: 64/@rem;
      color: rgba(255, 255, 255, .5);
      clear: both;
    }

  }
</style>
