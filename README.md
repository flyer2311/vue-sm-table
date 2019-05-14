# vue-sm-table
this is a table-plugin that can be used in mobile, it is based on iscroll
## Download
~~~cmd
npm install @flyer2311/vue-sm-table --save
~~~

## Function
1. support static table
1. support async
1. support timeout and fail
1. support px2rem

## Environment
1. VUE(install CLI)
1. iscroll 

## Basic instructions
请看./example/example.vue的例子

## Inner construction
~~~javascript
<FLYER-table
:td='td'
:th='th'
:error='error'
@resetFunction='getData()'
>
</FLYER-table>
~~~
