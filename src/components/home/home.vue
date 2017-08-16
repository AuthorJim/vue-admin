<template>
  <div class="home">
    <v-header></v-header>
    <div class="warn-info">
      <p class="text">店铺处于免费试用期（还剩45天）；逾期未订购的店铺将被打烊，影响店铺的正常运营！！！</p>
    </div>
    <baseform></baseform>
  </div>
</template>

<script>
import VHeader from 'base/v-header/v-header'
import Baseform from 'base/baseform/baseform'
export default {
  name: 'app',
  components: {
    VHeader,
    Baseform
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.home
  width 100%
  background #f5f5f5
  .warn-info
    height 50px
    line-height 50px
    margin-bottom 10px
    background #f8d7ad
    .text
      margin-left 20px
      font-size 14px
      color #333
</style>
