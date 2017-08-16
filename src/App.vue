<template>
  <div id="app">
    <sidebar></sidebar>
    <home></home>
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
  .sidebar
    flex 0 0 200px
  .home
    flex 1
</style>
