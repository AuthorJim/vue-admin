<template>
  <div class="sidebar">
    <div class="title">
      <div class="logo">
      </div>
    </div>
    <div class="nav-menu">
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1" class="nav-item">
            <template slot="title">概况</template>
            <el-menu-item class="sub-item" index="1-1">选项一</el-menu-item>
            <el-menu-item class="sub-item" index="1-2">选项二</el-menu-item>
            <el-menu-item class="sub-item" index="1-3">选项三</el-menu-item>
          </el-submenu>
          <el-submenu index="2" class="nav-item">
            <template slot="title">店铺</template>
            <el-menu-item class="sub-item" index="2-1">移动模块</el-menu-item>
            <el-menu-item class="sub-item" index="2-2">电商模块</el-menu-item>
            <el-menu-item class="sub-item" index="3-3">后台模块</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" class="nav-item">商品</el-menu-item>
          <el-menu-item index="4" class="nav-item">订单</el-menu-item>
          <el-menu-item index="5" class="nav-item">客户</el-menu-item>
          <el-menu-item index="6" class="nav-item">数据</el-menu-item>
          <el-menu-item index="7" class="nav-item">资产</el-menu-item>
          <el-menu-item index="8" class="nav-item">营销</el-menu-item>
          <el-menu-item index="9" class="nav-item">设置</el-menu-item>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  .title
    position relative
    width 200px
    height 60px
    background #324157
    .logo
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 130px
      height 28px
      background url(./logo.png) no-repeat 
      background-size 130px 28px
  .nav-menu
    .el-menu-vertical-demo
      border-top-left-radius 0
      border-top-right-radius 0
      .sub-item
        font-size 12px
        color #fff
</style>
