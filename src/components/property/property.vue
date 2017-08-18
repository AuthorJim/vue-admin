<template>
  <div class="property">
    <v-header></v-header>
    <warn-info></warn-info>
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
          <label for="">车锁类型</label>
          <el-select class="content no-border" v-model="value" placeholder="请选择">
            <el-option v-for="item in lockTypes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="input-item">
          <label for="">使用状态</label>
          <el-select class="content no-border" v-model="value" placeholder="请选择">
            <el-option v-for="item in isAvailable" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
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
            <el-table-column prop="carNumber" label="车辆编号">
            </el-table-column>
            <el-table-column prop="carType" label="车类型">
            </el-table-column>
            <el-table-column prop="lockNumber" label="车锁编号">
            </el-table-column>
            <el-table-column prop="lockType" label="锁类型">
            </el-table-column>
            <el-table-column prop="deviceID" label="设备ID">
            </el-table-column>
            <el-table-column prop="isAvailable" label="使用状态">
            </el-table-column>
            <el-table-column prop="location" label="位置信息">
            </el-table-column>
            <el-table-column prop="logAndlat" label="经纬度">
            </el-table-column>
            <el-table-column prop="area" label="区域">
            </el-table-column>
            <el-table-column prop="rentTimes" label="租车次数">
            </el-table-column>
            <el-table-column prop="settings" width="200" label="设置">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="pagination">
        <div class="block">
          <el-pagination :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="200">
          </el-pagination>
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
      lockTypes: [{
        value: '选项1',
        label: '三合一锁'
      }, {
        value: '选项2',
        label: '蓝牙锁'
      }, {
        value: '选项3',
        label: '电子锁'
      }, {
        value: '选项4',
        label: '百岁锁'
      }],
      isAvailable: [{
        value: '选项一',
        label: '使用中'
      }, {
        value: '选项二',
        label: '空闲'
      }],
      value: '',
      value1: '2015-10-12',
      tableData3: [{
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }, {
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }, {
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }, {
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }, {
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }, {
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }, {
        carType: '山地车',
        carNumber: 'B17080001',
        lockNumber: '00000808',
        lockType: '三合一锁',
        deviceID: 'B541214620',
        isAvailable: '空闲',
        location: '上海市静安区',
        logAndlat: '查看',
        area: '葡萄小镇',
        rentTimes: '68',
        settings: '开锁 上架 下架 租车记录'
      }],
      multipleSelection: []
    }
  },
  components: {
    VHeader,
    WarnInfo
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.property
  width 100%
  overflow hidden
  .panel
    position relative
    background #fff
    .input-content
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
  .formdata
    padding-top 20px
    margin 0 20px
    background #fff
    .form-content
      // width 100%
      font-size 12px
      th>.cell
        font-weight 700
      .cell
        font-size 12px
        color #333
  .pagination
    margin-left 15px
    padding 30px 0 
    .el-pagination
      .el-pagination__total
        display none
</style>