<template>
  <div class="father">
    <div class="pie" id="pie"></div>
  </div>
</template>

<script>
import { getDataBar } from "../network/request";
import { inject, reactive, onMounted, ref } from "vue";

export default {
  name: "pie",
  setup() {
    const echarts = inject("echarts");
    const pie = ref(null);
    let RowAllData = [];
    let pieValue = [];
    let big_pro = 0;
    let common = 0;
    let afterPro = 0;
    let youtn = 0;
    let achive = 0;
    //加载完成
    onMounted(() => {
      getPie();
    });

    //获取数据
    function getPie() {
      getDataBar().then((res) => {
        RowAllData = res.data.res;

        pieData(); //调用处理数据函数
      });
    }

    //处理数据
    function pieData() {
      pieValue = RowAllData.map((item) => {
        return { value: item.value, name: item.name };
      });

      pieValue.forEach((item) => {
        if (item.name === "重大项目") {
          big_pro += item.value;
        } else if (item.name === "一般项目") {
          common += item.value;
        } else if (item.name === "后期资助项目") {
          afterPro += item.value;
        } else if (item.name === "青年项目") {
          youtn += item.value;
        } else if (item.name === "成果文库") {
          achive += item.value;
        }
      });
      showData(); //调用饼图数据
    }

    //制作饼图数据
    function showData() {
      let num1 = { name: "重大项目", value: big_pro };
      let num2 = { name: "一般项目", value: common };
      let num3 = { name: "后期资助项目", value: afterPro };
      let num4 = { name: "青年项目", value: youtn };
      let num5 = { name: "成果文库", value: achive };

      // 制作图表
      const InstanceChart = echarts.init(document.querySelector("#pie"));
      const option = {
        title: {
          text: "项目占比",
          subtext: "占比",
          left: "center",
          textStyle: {
            color: "white",
          },
          subtextStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: "item",
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "6%",
          bottom: "3%",
          // 包含坐标值的距离
          containLabel: true,
        },
        legend: {
          orient: "vertical",
          left: "left",
          textStyle: {color: 'white'}
        },
        series: [
          {
            name: "Proportion of projects",
            type: "pie",
            data: [num1, num2, num3, num4, num5],
            label: {
              show: true,
              position: 'inner',
              formatter: '{d}%'
            },
            center: ['60%', '60%']
          },
        ],
      };
      InstanceChart.setOption(option);
    }

    return {
      pie,
    };
  },
};
</script>


<style scoped>
.father {
  height: 100%;
  width: 100%;
}
.pie {
  height: 100%;
  width: 100%;
}
</style>