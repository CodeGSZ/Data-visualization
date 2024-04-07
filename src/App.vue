<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入echarts文件
import * as echarts from '../public/echarts.min.js'

import { provide } from 'vue'

export default {
  name: "App",
  setup () {
    // 传递Echarts文件
    provide ('echarts', echarts)
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  /* background-color: rgb(11, 37, 66); */
  background-color: rgb(12, 50, 68);
}
</style>
