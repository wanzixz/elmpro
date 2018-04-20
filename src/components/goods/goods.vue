<!-- 商品列表 -->

<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" v-for="item,index in goods" :key="item.index" :class="currentIndex === index ? 'active' : ''" @click="menuClick(index, $event)">
          <span class="text">
            <icon-tag v-if="item.type>0" :iconSize="24" :iconType="item.type"></icon-tag>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list" ref="jsFoodsList">
          <h1 class="title">{{item.name}}</h1>
          <ul class="food-ul">
            <li v-for="food in item.foods" class="food-item">
              <div class="food-icon">
                <img :src="food.icon" alt="food.name">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="sell-count">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥<strong >{{food.price}}</strong></span>
                  <span class="old" v-show="food.oldPrice">￥<strong>{{food.oldPrice}}</strong></span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
  </div>
</template>

<script>
import { fetchGoods } from '@/service/seller'
import iconTag from '@/components/iconTag/iconTag'
import shopcart from '@/components/shopcart/shopcart'
import BScroll from 'better-scroll'

const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  created () {
    console.log(this.seller)
    fetchGoods().then(res => {
      if (res.errno === ERR_OK) {
        this.goods = res.data
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      }
    })
  },
  methods: {
    menuClick (index, event) {
      let foodList = this.$refs.jsFoodsList
      let el = foodList[index]
      console.log(el)
      this.foodsScroll.scrollToElement(el, 300)
    },
    _initScroll () { // 菜单和商品 滚动
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {})
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.jsFoodsList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
      console.log(foodList)
    }
  },
  components: {
    'icon-tag': iconTag,
    'shop-cart': shopcart
  }
}
</script>

<style lang='less' scoped>
@import (reference) '../../assets/style/init';

.goods{
  display: flex;
  position: absolute;
  top: 352/@rem;
  bottom: 92/@rem;
  width: 100%;
  overflow: hidden;
  .menu-wrapper{
    flex: 0 0 160/@rem;
    height: 100%;
    background: #f3f5f7;
    .menu-item{
      display: table;
      width: 112/@rem;
      height: 108/@rem;
      padding: 0 24/@rem;
      line-height: 28/@rem;
      .text{
        display: table-cell;
        width: 112/@rem;
        vertical-align: middle;
        font-size: 24/@rem;
        position: relative;
        .bline(2, rgba(7, 17, 27, 0.1));
      }
      &:last-child{
        .text:after{
          border:none;
        }
      }
      &.active{
        position: relative;
        z-index: 10;
        margin-top: -2/@rem;
        font-size: 700;
        background: #fff;
      }
    }
  }
  .foods-wrapper{
    flex: 1;
    width: 160/@rem;
    .title{
      padding-left: 28/@rem;
      font-size: 24/@rem;
      color: rgb(147, 153, 159);
      height: 52/@rem;
      line-height: 52/@rem;
      border-left:4/@rem solid #d9dde1;
      background: #f3f5f7;
    }
    .food-ul{
      padding:0 36/@rem;
      list-style: none;
      .food-item{
        padding:36/@rem 0;
        position: relative;
        display: flex;
        align-items: center;
        .bline(2,rgba(7, 17, 27, 0.1));
        &:last-child:after{
          content: '';
          border: none;
        }
        .food-icon{
          width: 114/@rem;
          height: 114/@rem;
          >img{
            max-width: 100%;
          }
        }
        .content{
          flex: 1;
          margin-left: 20/@rem;
          .name{
            margin-top: 4/@rem;
            font-size: 28/@rem;
            color: rgb(7,17,27);
            line-height: 28/@rem;
          }
          .desc, .extra{
            font-size: 20/@rem;
            color: rgb(147,153,159);
            line-height: 20/@rem;
          }
          .desc{
            margin:16/@rem 0;
          }
          .extra{
            .rating{
              margin-left: 20/@rem;
            }
          }
          .price{
            font-size: 20/@rem;
            font-weight: normal;
            line-height: 48/@rem;
            margin-right: 16/@rem;
            .now{
              color: rgb(240,20,20);
              >strong{
                font-size:28/@rem;
                font-weight: 700;
              }
            }
            .old{
              color: rgb(147,153,159);
              text-decoration: line-through;
             >strong{
               font-weight: 700;
             }
            }
          }
        }
      }
    }
  }
}

</style>
