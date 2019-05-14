1 <FLYER-table>标签的外层要被包裹,确定宽高
2 表格的表头和内容均可异步获取
3 异步获取新增可选接口error用来处理请求不到或者超时显示情况
4 异步获取新增可选接口resetFunction 用来处理error情况后的点击事件回调
5 th格式 
[{field_name: 'td_name1',name: '显示的表头', fixed: true},{...},{...}]
field_name为td绑定的key
name是th显示的名字
fixed为是否固定该区域
td格式
[{td_name1: 'xxxx',td_name2: 'xxx'...},{...},{...}]
td_name1为th的field_name的属性值,td的json数据顺序可以打乱
