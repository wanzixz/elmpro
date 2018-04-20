<!-- 购物车组件 -->

<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount>0}">
            <span class="icon-shopping_cart"></span>
            <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
          </div>
        </div>
        <div class="price" :class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay">￥{{minPrice}}元起送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [{
          price: 10,
          count: 2
        }]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='less' scoped>
  @import (reference) '../../assets/style/init';
  .shopcart{
    width: 100%;
    height: 96/@rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    .content{
      display: flex;
      height: 100%;
      background: #141d27;
      font-size: 0;
      .content-left{
        flex: 1;
        .logo-wrapper{
          display: inline-block;
          position: relative;
          width: 112/@rem;
          height: 112/@rem;
          bottom: 16/@rem;
          margin: 0 24/@rem;
          padding: 12/@rem;
          box-sizing: border-box;
          border-radius: 50%;
          background: #141d27;
          vertical-align: top;
          .logo{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-align: center;
            background: #2b343c;
            &.highlight{
              background: rgb(0,160,220);
              color: #fff;
              .icon-shopping_cart{
                color:#fff;
              }
            }
            .num{
              position: absolute;
              top: 0;
              right: 0;
              width: 48/@rem;
              height: 32/@rem;
              line-height: 32/@rem;
              text-align: center;
              border-radius: 32/@rem;
              font-size: 18/@rem;
              font-weight: 700;
              color:#fff;
              background: rgb(240, 20, 20);
              box-shadow: 0 4/@rem 8/@rem 0 rgba(0,0,0,.4)
            }
            .icon-shopping_cart{
              line-height: 88/@rem;
              font-size: 48/@rem;
              color: #80858a;
            }
          }
        }
        .price, .desc{
          display: inline-block;
          vertical-align: top;
          margin-top: 24/@rem;
          font-size: 32/@rem;
          color: rgba(255, 255, 255, .4);
          font-weight: 700;
          line-height: 48/@rem;
        }
        .price{
          &.highlight{
            color: #fff;
          }
        }
        .desc{
          font-size: 24/@rem;
          font-weight: normal;
          margin-left: 24/@rem;
          padding: 0 24/@rem;
          position: relative;
          .lline(2, rgba(255,255,255,.1))

        }
      }
      .content-right{
        flex: 0 0 210/@rem;
        width: 210/@rem;
        background: #2b333b;
        .pay{
          margin-top: 24/@rem;
          line-height: 48/@rem;
          text-align: center;
          font-size: 24/@rem;
          color: rgba(255, 255, 255, .4);
          font-weight: 700;
          padding: 0 16/@rem;
        }
      }
    }
  }
</style>
