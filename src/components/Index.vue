<template>
  <div>
    <v-header :seller="seller" ></v-header>
    <div class="tab line">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <v-body :goods="goods" :seller="seller"></v-body>
  </div>
</template>

<script>
// 头部组件
import Header from '@/components/header/Header'
import Body from '@/components/goods/goods'
import { fetchSeller } from '@/service/seller'

const ERR_OK = 0
export default {
  name: 'HelloWorld',
  data () {
    return {
      seller: {},
      goods: []
    }
  },
  methods: {
  },
  created () {
    fetchSeller().then(res => {
      if (res.errno === ERR_OK) {
        this.seller = res.data
      }
      console.log(res)
    })
  },
  components: {
    'v-header': Header,
    'v-body': Body
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import (reference) '../assets/style/init';

.tab{
  display: flex;
  width: 100%;
  height: 80/@rem;
  line-height: 80/@rem;
  .bline(2,rgba(7, 17, 27, 0.1));
  .tab-item{
    flex: 1;
    text-align: center;
    & > a{
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.active{
        color: rgb(240, 20, 20)
      }
    }
  }
}
</style>
