<template>
  <div class="sidebar">
    <div class="title">
      <a class="logo" href='../../storeEntrance.html'>
        <img src="./logo.png" alt="">
      </a>
    </div>
    <div class="nav-menu">
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <router-link to="home" tag="li">
            <el-menu-item index="1" class="nav-item">概况
            </el-menu-item>
          </router-link>
          <router-link to="seller" tag="li">
            <el-menu-item index="2" class="nav-item">店铺
            </el-menu-item>
          </router-link>
          <router-link to="goods" tag="li">
            <el-menu-item index="3" class="nav-item">商品
            </el-menu-item>
          </router-link>
          <router-link to="order" tag="li">
            <el-menu-item index="4" class="nav-item">订单
            </el-menu-item>
          </router-link>
          <router-link to="customer" tag="li">
            <el-menu-item index="5" class="nav-item">客户
            </el-menu-item>
          </router-link>
          <router-link to="datas" tag="li">
            <el-menu-item index="6" class="nav-item">数据
            </el-menu-item>
          </router-link>
          <router-link to="property" tag="li">
            <el-menu-item index="7" class="nav-item">资产
            </el-menu-item>
          </router-link>
          <router-link to="marketing" tag="li">
            <el-menu-item index="8" class="nav-item">营销
            </el-menu-item>
          </router-link>
          <router-link to="settings" tag="li">
            <el-menu-item index="9" class="nav-item">设置
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.sidebar
  width 200px
  min-height 100vh
  .title
    position relative
    width 200px
    height 60px
    background #324157
    .logo
      position absolute
      display block
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 130px
      height 28px
  .nav-menu
    .el-menu-vertical-demo
      border-top-left-radius 0
      border-top-right-radius 0
      .nav-item
        &.is-active
          color rgba(49,202,111,.8)
        .sub-item
          font-size 12px
          color #fff
          &.is-active
            color rgba(49,202,111,.8)
</style>
