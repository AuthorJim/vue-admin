<template>
  <div class="header">
    <div class="title">管理控制台</div>
    <ul class="nav">
      <li class="list-item">
        <input type="text" class="search" placeholder="搜索">
      </li>
      <li class="list-item">
        支持
      </li>
      <li class="list-item">
        管理        
      </li>
      <li class="list-item">
        设置
      </li>
      <li class="list-item">
        <i class="fa-news"></i>
      </li>
      <li class="list-item">
        <i class="fa-user"></i>
        <span class="text">jwhuang@100.bike</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header
  display flex
  justify-content: space-between
  height 60px
  background #fff
  .title
    height 60px
    line-height 60px
    margin-left 20px
    font-size 16px
    color #333
  .nav
    display flex
    margin-right 40px
    .list-item
      height 60px
      line-height 60px
      margin-right 40px
      font-size 14px
      &:last-child
        margin-right 0
      .search
        width 32px
        height 20px
        padding-left 20px
        background url(./search_icon.png) no-repeat 2px 4px
        outline none
      .fa-news
        display inline-block
        width 15px
        height 18px
        margin-bottom -5px
        background url('./news_icon.png') no-repeat 
        background-size 15px 18px
      .fa-user
        display inline-block
        width 17px
        height 18px
        margin 0 10px -5px 0
        background url('./Avatar_icon.png') no-repeat 
        background-size 17px 18px
</style>
