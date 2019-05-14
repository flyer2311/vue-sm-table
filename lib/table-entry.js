import table from './table.vue'
const tablePlugin = {}
tablePlugin.install = function (Vue, options) {
  Vue.component('FLYER-table', table)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(tablePlugin)
}
export default tablePlugin
