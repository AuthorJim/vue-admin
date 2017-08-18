<template>
  <div id="app">
    <div class="left">
      <sidebar></sidebar>
    </div>
    <div class="right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Sidebar from 'components/sidebar/sidebar'
import Home from 'components/home/home'
export default {
  name: 'app',
  components: {
    Sidebar,
    Home
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
  display flex
  .left
    background #324157
  .right
    flex 1
    background #fff
</style>
