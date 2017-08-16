<template>
  <div class="baseform">
    <div class="panel">
      <div class="input-content">
        <div class="input-item">
          <label for="">车辆编号</label>
          <input class="content" placeholder="请输入"></input>
        </div>
        <div class="input-item">
          <label for="">锁编号</label>
          <input class="content" placeholder="请输入"></input>
        </div>
        <div class="input-item">
          <label for="">车辆类型</label>
          <input class="content" placeholder="请选择"></input>
        </div>
        <div class="input-item">
          <label for="">租车日期</label>
          <input class="content" placeholder="请输入"></input>
        </div>
        <div class="input-item">
          <label for="">客户姓名</label>
          <input class="content" placeholder="请输入"></input>
        </div>
        <div class="input-item">
          <label for="">手机号</label>
          <input class="content" placeholder="请输入"></input>
        </div>
        <div class="input-item">
          <label for="">车辆类型</label>
          <input class="content" placeholder="请选择"></input>
        </div>
      </div>
    </div>
    <div class="form-content"></div>
    <div class="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.baseform
  width 100%
  height 100%
  background #f5f5f5
  .panel
    background #fff
  .input-content
    width 1016px
    font-size 0
    margin-bottom 10px
    padding-bottom 20px
    .input-item
      display inline-block
      height 30px
      line-height 30px
      margin 20px 0 0 20px
      &>label
        margin-right 16px
        font-size 12px
        color #333
      .content
        width 150px
        height 30px
        padding-left 10px
        font-size 12px
        color #999
        border 1px solid #f2f2f2
        outline none
</style>