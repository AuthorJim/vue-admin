<template>
  <div class="customer">
    <v-header></v-header>
    <warn-info></warn-info>
    <div class="panel top">
      <div class="input-item">
        <label for="">车辆编号</label>
        <input class="content" placeholder="请输入"></input>
      </div>
      <div class="input-item">
        <label for="">车辆编号</label>
        <input class="content" placeholder="请输入"></input>
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
            <el-table-column prop="name" label="用户">
            </el-table-column>
            <el-table-column prop="phoneNumber" width="120" label="手机号">
            </el-table-column>
            <el-table-column prop="carNumber" label="车辆编号">
            </el-table-column>
            <el-table-column prop="lockNumber" label="车锁编号">
            </el-table-column>
            <el-table-column prop="rentTime" width="180" label="租车时间">
            </el-table-column>
            <el-table-column prop="area" label="所属区域">
            </el-table-column>
            <el-table-column prop="isReturn" label="是否还车">
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
      tableData3: [{
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        lockNumber: '00000808',
        area: '葡萄小镇',
        isReturn: '在租',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        rentTime: '2017-08-11 10:31:09',
        settings: '查看详情'
      }],
      multipleSelection: []
    }
  },
  components: {
    VHeader,
    // Baseform,
    WarnInfo
    // Formdata,
    // BtnGroup
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.customer
  .panel
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
    .formdata
      margin 0 2  0px
      .form-content
        font-size 12px
        th>.cell
          font-weight 700
        .cell
          font-size 12px
          color #333    
</style>