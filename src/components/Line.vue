<template>
  <div class="father">
    <div class="line" id="line"></div>
  </div>
</template>

<script>
import { getDataBar } from "../network/request";

import { ref, reactive, inject, onMounted } from "vue";

export default {
  setup() {
    let echarts = inject("echarts");
    let AllData = reactive({
      LineData: {},
    });
    let x_name1 = ref([]);
    let y_value1 = ref([0]);
    let x_name2 = ref([]);
    let y_value2 = ref([0]);
    let x_name3 = ref([]);
    let y_value3 = ref([0]);
    let x_name4 = ref([]);
    let y_value4 = ref([0]);
    let currentPage = ref(1);
    let totalPage = ref(0);

    //获取数据
    async function getDataLine() {
      return await getDataBar();
    }

    // 挂载完成
    onMounted(() => {
      getDataLine().then((res) => {
        AllData.LineData = res.data.res;

        let num1 = AllData.LineData.slice(0, 5);
        let num2 = AllData.LineData.slice(5, 11);
        let num3 = AllData.LineData.slice(11, 16);
        let num4 = AllData.LineData.slice(16, 21);

        // 数据处理
        x_name1.value = num1.map((item) => {
          return item.address;
        });
        y_value1.value = num1.map((item) => {
          return item.value;
        });
        x_name2.value = num2.map((item) => {
          return item.address;
        });
        y_value2.value = num2.map((item) => {
          return item.value;
        });
        x_name3.value = num3.map((item) => {
          return item.address;
        });
        y_value3.value = num3.map((item) => {
          return item.value;
        });
        x_name4.value = num4.map((item) => {
          return item.address;
        });
        y_value4.value = num4.map((item) => {
          return item.value;
        });
        //  初始化图表
        // const CharInstan = echarts.init(document.querySelector("line"));
        const CharInstance = echarts.init(document.querySelector("#line"));
        const option = {
          color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
          title: {
            text: "地区情况",
            subtext: "地区走势",
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
            data: x_name1.value,
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "北京",
              type: "line",
              data: y_value1.value,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128, 255, 165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1, 191, 236)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "上海",
              type: "line",
              data: y_value2.value,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128, 255, 165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1, 191, 236)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "贵阳",
              type: "line",
              data: y_value3.value,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128, 255, 165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1, 191, 236)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "河北",
              type: "line",
              data: y_value4.value,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128, 255, 165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1, 191, 236)",
                  },
                ]),
              },
              emphasis: {
                focus: "series",
              },
            },
          ],
        };
        CharInstance.setOption(option);
      });
    });

    return {
      echarts,
      AllData,
    };
  },
};
</script>

<style scoped>
.father {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
}
.line {
  height: 100%;
  width: 100%;
}
</style>