<template>
  <div class="pages-tables " id="pages-tables">
    <div class="rolling-table meal-table" ref="tableBox">
      <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable" v-show="stateCollection.isResolve">
        <tr>
          <th class="rows" :class="{'cross': value.fixed}" v-for="(value,index) in th" :key="index">{{value.name}}</th>
        </tr>
        <tr v-for="(value,index) in td" :key="index">
          <td v-for="(v,n,i) in value" :key="n" :class="{'cols': th[i].fixed}">
            {{value[th[i].field_name]}}
          </td>
        </tr>
        <tr></tr>
      </table>
      <div v-show="stateCollection.isPending" class="table-pending">数据正在请求中</div>
      <div v-show="stateCollection.isReject" class="table-reject" @tap='getData()'>数据请求失败,点击重试</div>
      <div v-show="stateCollection.isTimeout" class="table-timeout" @tap='getData()'>数据请求超时,点击重试</div>
    </div>
  </div>
</template>

<script>
import {createIScroller} from './table.js'
export default {
  name: 'SPP',
  props: {
    td: {
      type: Array
    },
    th: {
      type: Array
    },
    error: {}
  },
  data () {
    return {
      scroll: {
        scroller: null
      },
      stateCollection: {
        isResolve: false,
        isPending: true,
        isReject: false,
        isTimeout: false
      },
      showTH: false,
      showTD: false
    }
  },
  mounted () {
    this.scroll.scroller = createIScroller('.meal-table')
  },
  methods: {
    updateState (state) {
      this.stateCollection = {
        isResolve: false,
        isPending: false,
        isReject: false,
        isTimeout: false
      }
      this.stateCollection[state] = true
    },
    getData () {
      console.log('点击')
      this.updateState('isPending')
      this.$emit('resetFunction')
    }
  },
  watch: {
    td () {
      this.updateState('isResolve')
    },
    error () {
      if (!!this.error && JSON.stringify(this.error) !== '{}') {
        // 请求错误
        if (this.error.code === 'ECONNABORTED' && this.error.message.indexOf('timeout') !== -1) {
          this.updateState('isTimeout')
        } else {
          this.updateState('isReject')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pages-tables {
  /* ios滑动顺畅 */
  -webkit-overflow-scrolling: touch;
  position: relative;
  width: 100%;
  height: 100%;
}
.rolling-table {
  height: 100%;
  font-size: 28px;/*px*/
  color: #86939a;
  background-color: #fff;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  position: relative;
  top: 0;
  overflow: hidden;
}
.rows {
  position: relative;
  z-index: 3;
}
.cross {
  position: relative;
  z-index: 5;
}
table td {
  border: 0px solid #000;
  font-size: 32px;/*px*/
  background: #fff;
}
::-webkit-scrollbar {
    display: none;
}
.table {
  color: #86939e;
  font-size: 32px;/*px*/
  border: 0px solid #000;
  min-height: 100%;
  text-align: center;
  td {
    border-bottom: 1px solid #eee;/*no*/
    white-space: nowrap;
    height: 86px;
    line-height: 86px;
    padding: 0 20px;
  }
  th {
    color: #43484d;
    white-space: nowrap;
    height: 74px;
    line-height: 74px;
    padding: 0 30px;
    background-color: #f3f4f6;
    font-weight: normal;
    padding-bottom: 0;
    padding-top: 0;
  }
}
tr{
  position: relative;
  background-color: #fff;
}
.table-pending,.table-reject,.table-timeout{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
