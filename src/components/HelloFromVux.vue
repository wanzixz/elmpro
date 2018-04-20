<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { fetchTest } from 'services/test'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'hello world',
      currentPage: 1
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetchTest({current_page: this.currentPage}).then((res) => {
        console.log(11, res)
      })
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
