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
          <el-select class="content no-border" v-model="value" placeholder="请选择">
            <el-option v-for="item in carTypes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="input-item">
          <label for="">租车日期</label>
          <el-date-picker v-model="value1" class="content no-border" type="date" placeholder="选择日期" >
          </el-date-picker>
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
          <label for="">客户来源</label>
          <el-select v-model="value" class="content no-border" placeholder="请选择">
            <el-option v-for="item in voSources" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="search-btn">
        <el-button>查询</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carTypes: [{
        value: '选项1',
        label: '普通车'
      }, {
        value: '选项2',
        label: '山地车'
      }, {
        value: '选项3',
        label: '亲子车'
      }, {
        value: '选项4',
        label: '旅游车'
      }],
      voSources: [{
        value: '选项1',
        label: '普通车'
      }, {
        value: '选项2',
        label: '山地车'
      }, {
        value: '选项3',
        label: '亲子车'
      }, {
        value: '选项4',
        label: '旅游车'
      }],
      value: '',
      value1: '2015-10-12'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.baseform
  width 100%
  background #f5f5f5
  .panel
    position relative
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
        &.no-border
          border none
  .search-btn
    position absolute
    right 100px
    bottom 20px
    height 30px
    line-height 30px
    .el-button
      width 90px
      background #31ca6f
      color #fff
      outline none
</style>