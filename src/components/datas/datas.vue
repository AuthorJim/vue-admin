<template>
  <div class="datas">
    <v-header></v-header>
    <warn-info></warn-info>
    <div class="panel top">
      <div class="input-item">
        <label for="">车辆类型</label>
        <el-select class="content no-border" v-model="value" placeholder="请选择">
          <el-option v-for="item in carTypes" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-btn">
        <el-button>查询</el-button>
      </div>
    </div>
    <div class="panel">
      <div class="formdata">
        <div class="form-content">
          <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="48">
            </el-table-column>
            <el-table-column prop="rulename" label="规则名称">
            </el-table-column>
            <el-table-column prop="carType" label="车型">
            </el-table-column>
            <el-table-column prop="expense" label="计费周期（分钟）">
            </el-table-column>
            <el-table-column prop="perExpense" label="单位费率（分）">
            </el-table-column>
            <el-table-column prop="freeTime" width="200" label="免费时长（分钟）">
            </el-table-column>
            <el-table-column prop="isUse" label="是否启用">
            </el-table-column>
            <el-table-column prop="settings" label="设置">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from 'base/v-header/v-header'
import WarnInfo from 'base/warninfo/warninfo'
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
      tableData3: [{
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }, {
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }, {
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }, {
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }, {
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }, {
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }, {
        rulename: '萄乐山地车',
        carType: '山地车',
        expense: '60',
        perExpense: '500',
        freeTime: '5',
        isUse: '启用',
        settings: '查看详情'
      }],
      multipleSelection: [],
      value: ''
    }
  },
  components: {
    VHeader,
    WarnInfo
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.datas
  .panel
    width 100%
    &.top
      position relative
    .input-item
      padding 20px 0
      margin 0 20px
      display inline-block
      height 30px
      line-height 30px
      margin-right 60px
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
      left 645px
      bottom 20px
      height 30px
      line-height 30px
      .el-button
        width 90px
        background #31ca6f
        color #fff
        outline none
//   .formdata
//     width 100%
//     margin 0 20px
//     .form-content
//       font-size 12px
//       th>.cell
//         font-weight 700
//       .cell
//         font-size 12px
//         color #333 
</style>