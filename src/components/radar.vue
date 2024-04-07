<template>
  <div class="father">
    <div class="Pie" id="radar"></div>
  </div>
</template>

<script>
import { inject, ref, reactive, onBeforeMount, onMounted, toRaw } from "vue";
import { getDataBar } from "../network/request";

export default {
  name: "Pie",
  setup() {
    const echarts = inject("echarts");
    let Radar = reactive({});
    let RowData = [];
    let currentPage = 1;
    let totaPage = 0;
    let showData = [];

    // 获取数据
    function getRarData() {
      getDataBar().then((res) => {
        RowData = res.data.res;
        totaPage =
          RowData.length % 5 === 0
            ? RowData.length % 5
            : (RowData.length % 5) + 1; //判断总页数
        updataChart(); //调用更新图表
      });
    }

    // 处理数据
    function updataChart() {
      // 处理数据
      let y_value = RowData.map((item) => {
        return item.value;
      });
      let x_name = RowData.map((item) => {
        return item.address;
      });
      let num1 = 1; //条件记录值
      for (let a = 0; a <= totaPage; a++) {
        showData.push(y_value.slice((num1 - 1) * 5, num1 * 5));
        num1++;
      }
      create();
    }

    // 创建图表
    function create() {
      //创建echarts实例
      const CharInstance = echarts.init(document.querySelector("#radar"));
      const option = {
        title: {
          text: "雷达占比",
          subtext: "占比情况",
          textStyle: {
            color: "white",
          },
          subtextStyle: {
            color: "white",
          },
        },
        legend: {
          left: 80,
          align: 'right',
          textStyle: { color: "white" },
        },
        tooltip: {},
        grid: {
          top: "20%",
          left: "3%",
          right: "6%",
          bottom: "3%",
          // 包含坐标值的距离
          containLabel: true,
        },
        radar: {
          indicator: [
            { name: "普通项目", max: 1500 },
            { name: "一般项目", max: 800 },
            { name: "重大项目", max: 800 },
            { name: "成果文库", max: 800 },
            { name: "文学社区", max: 800 },
            { name: "青年项目", max: 800 },
          ],
        },
        series: [
          {
            name: "项目总成",
            type: "radar",
            data: [
              {
                name: "北京",
                value: showData[0],
              },
              {
                name: "上海",
                value: showData[1],
              },
              {
                name: "贵阳",
                value: showData[2],
              },
              {
                name: "杭州",
                value: showData[3],
              },
              {
                name: "深圳",
                value: showData[4],
              },
            ],
          },
        ],
      };
      CharInstance.setOption(option);
    }

    // 挂载之前
    onBeforeMount(() => {
      getRarData(); //调用获取数据函数
    });

    // 挂载时
    onMounted(() => {});

    return {
      echarts,
      Radar,
      RowData,
    };
  },
};
</script>

<style scoped>
.father {
  height: 100%;
  width: 100%;
}
.Pie {
  height: 100%;
  width: 100%;
}
</style>