<template>
  <div>
    <span>test</span>
    <div class="wrap">
      <FLYER-table :td='td' :th='th' :error='error' @resetFunction='getData()'></FLYER-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      td: [],
      th: [],
      error: {}
    }
  },
  methods: {
    getData () {
      setTimeout(() => {
        this.th = [
          {
            field_name: 'statis_date',
            name: '第三行当月数据',
            fixed: true
          },
          {
            field_name: 'area_name',
            name: '新增'
          },
          {
            field_name: 'area_name1',
            name: '1'
          },
          {
            field_name: 'area_name2',
            name: '2'
          },
          {
            field_name: 'area_name3',
            name: '第三行当月新增3'
          }
        ]
        this.td = [
          {
            area_name: '新增数据开始',
            area_name1: '新增数据开始1',
            area_name2: '新增数据开始2',
            area_name3: '新增数据开始3',
            statis_date: 100001
          },
          {
            statis_date: 100002,
            area_name: '新增数据开始',
            area_name2: '新增数据开始2',
            area_name3: '新增数据开始3',
            area_name1: '新增数据开始1'
          },
          {
            statis_date: 100003,
            area_name: '新增数据开始',
            area_name1: '新增数据开始1',
            area_name2: '新增数据开始2',
            area_name3: '新增数据开始3'
          },
          {
            statis_date: 100004,
            area_name: '新增数据开始',
            area_name1: '新增数据开始1',
            area_name2: '新增数据开始2',
            area_name3: '新增数据开始3'
          },
          {
            statis_date: 100005,
            area_name: '新增数据开始',
            area_name1: '新增数据开始1',
            area_name2: '新增数据开始2',
            area_name3: '新增数据开始3'
          },
          {
            statis_date: 100006,
            area_name: '新增数据开始',
            area_name1: '新增数据开始1',
            area_name2: '新增数据开始2',
            area_name3: '新增数据开始3'
          }
        ]
      }, 1000)
    },
    getError () {
      setTimeout(() => {
        this.error = {code: 'ECONNABORTED', message: 'timeout'}
      }, 1000)
    }
  },
  mounted () {
    this.getData()
    // this.getError()
  }
}
</script>

<style>
.wrap{
  width: 100%;
  height: 250px;/*no*/
}
</style>
