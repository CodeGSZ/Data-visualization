<template>
  <div class="father">
    <div class="bar" id="bar"></div>
  </div>
</template>

<script>
import { getDataBar } from "@/network/request";
import { ref, reactive, inject, onMounted, onBeforeMount } from "vue";

export default {
  name: "Bar",
  components: {},
  setup() {
    // 接收echarts文件
    let echarts = inject("echarts");
    let AllData = [];
    let currentPage = ref(1);
    let TotaPage = ref(0);
    let timer = 0;

    onMounted(() => {
      getBar();
    });

    //获取数据
    function getBar() {
      getDataBar().then((res) => {
        AllData = res.data.res;
        //判断数据分页数
        TotaPage.value =
          AllData.length % 5 === 0
            ? AllData.length / 5
            : AllData.length / 5 + 1;
        // 调用处理数据函数
        dealData();
        console.log(res)
        startInterval();
      });
    }

    //数据处理
    function dealData() {
      let start = (currentPage.value - 1) * 5;
      let end = currentPage.value * 5;
      let ShowData = AllData.slice(start, end);

      let x_name = ShowData.map((item) => {
        return item.address;
      });
      let y_value = ShowData.map((item) => {
        return item.value;
      });

      //调用图表
      upDataChart(x_name, y_value);
    }

    // 更新图表
    function upDataChart(x_name, y_value) {
      // 获取echarts实例
      const CharInstance = echarts.init(document.querySelector("#bar"));
      // 添加鼠标事件
      CharInstance.on("mouseover", () => {
        clearInterval(timer);
      });
      CharInstance.on("mouseout", () => {
        if(timer) {
          clearInterval(timer)
        }
        startInterval()
      });

      const option = {
        title: {
          text: "地区统计",
          subtext: "获批项目",
          textStyle: {
            color: "white",
          },
          subtextStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
          textStyle: { color: "white" },
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "6%",
          bottom: "3%",
          // 包含坐标值的距离
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: x_name,
          axisLabel: {
            textStyle: { color: "white" },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: { color: "white" },
          },
        },
        series: [
          {
            name: "获批项目",
            type: "bar",
            data: y_value,
            markPoint: {
              data: [
                { type: "max", name: "max" },
                { type: "min", name: "min" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "average" }],
            },
            label: {
              show: true,
              // position: 'top'
            },
            itemStyle: {
              barBorderRadius: [40, 40, 0, 0],
            },
          },
        ],
      };
      CharInstance.setOption(option);
    }

    //设置定时器
    function startInterval() {
      timer = setInterval(() => {
        // 判断是否有定时器
        // if (timer) {
        //   clearInterval(timer)
        // }
        currentPage.value++;
        //判断循环得次数
        if (currentPage.value > TotaPage.value) {
          currentPage.value = 1;
        }
        dealData();
      }, 3000);
    }

    return {
      AllData,
      currentPage,
      TotaPage,
    };
  },
};
</script>

<style lang="css" scoped>
.father {
  height: 100%;
  width: 100%;
}
.bar {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
}
</style>