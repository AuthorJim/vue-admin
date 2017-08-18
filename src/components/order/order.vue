<template>
  <div class="home">
    <v-header></v-header>
    <warn-info></warn-info>
    <baseform></baseform>
    <div class="panel">
      <btn-group></btn-group>
      <formdata></formdata>  
    </div>
  </div>
</template>

<script>
import VHeader from 'base/v-header/v-header'
import WarnInfo from 'base/warninfo/warninfo'
import Baseform from 'base/baseform/baseform'
import BtnGroup from 'base/btn-group/btn-group'
import Formdata from 'base/formdata/formdata'
export default {
  components: {
    VHeader,
    Baseform,
    WarnInfo,
    Formdata,
    BtnGroup
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.home
  width 100%
  overflow hidden
</style>