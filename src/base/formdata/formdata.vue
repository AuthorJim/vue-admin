<template>
  <div class="formdata">
    <div class="form-content">
      <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="48">
        </el-table-column>
        <el-table-column id="table-head" label="姓名">
          <template scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="phoneNumber" label="手机号">
        </el-table-column>
        <el-table-column prop="voSource" label="客户端来源">
        </el-table-column>
        <el-table-column prop="carType" label="车类型">
        </el-table-column>
        <el-table-column prop="carNumber" label="车编号">
        </el-table-column>
        <el-table-column prop="expense" label="消费金额">
        </el-table-column>
        <el-table-column prop="ridingTime" label="骑行时长">
        </el-table-column>
        <el-table-column prop="rentTime" label="租车时间">
        </el-table-column>
        <el-table-column prop="settings" label="设置">
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <div class="block">
        <el-pagination :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="200">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import BtnGroup from 'base/btn-group/btn-group'
export default {
  data() {
    return {
      tableData3: [{
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: '10.00',
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: '10.00',
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: '10.00',
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: '10.00',
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: '10.00',
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: '10.00',
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }, {
        phoneNumber: '13765390020',
        name: '王小虎',
        voSource: 'App',
        carType: '山地车',
        carNumber: 'B17080001',
        expense: 10.00,
        ridingTime: 30,
        rentTime: '2017-08-16 11:23:20',
        settings: '骑行轨迹 详情'
      }],
      multipleSelection: []
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.formdata
  margin 0 20px
  .form-content
    font-size 12px
    th>.cell
      font-weight 700
    .cell
      font-size 12px
      color #333
  .pagination
    padding 30px 0 
    .el-pagination
      .el-pagination__total
        display none
</style>
