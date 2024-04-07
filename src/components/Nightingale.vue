<template>
  <div class="father">
    <div id="circale"></div>
  </div>
</template>
<script>
import { getDataBar } from "../network/request";
import { inject, ref, onMounted } from "vue";

export default {
  name: "NandingGeEr",
  setup() {
    const ecahrts = inject("echarts");
    let AllData = 0;
    let data = 0;
    let Totapage = 0;
    let currentPage = 1;
    let time;

    //加载完成
    onMounted(() => {
      getCircla();
    });
    //获取数据
    function getCircla() {
      getDataBar().then((res) => {
        AllData = res.data.res;
        Totapage =
          AllData.length % 5 === 0
            ? AllData.length / 5
            : parseInt(AllData.length / 5 + 1);
        //调用数据处理函数
        DealData();
        startInterval();
      });
    }

    //处理数据
    function DealData() {
      let start = (currentPage - 1) * 5;
      let end = currentPage * 5;
      let showData = AllData.slice(start, end);

      data = showData.map((item) => {
        return { value: item.value, name: item.address };
      });
      // 调用更新图表函数
      updataChrat();
    }

    //更新图表
    function updataChrat() {
      const CharInstance = ecahrts.init(document.querySelector("#circale"));
      //添加鼠标事件
      CharInstance.on("mouseover", () => {
        clearInterval(time);
      });
      CharInstance.on("mouseout", () => {
        if (time) {
          clearInterval(time);
        }
        startInterval(time);
      });

      const option = {
        title: {
          top: 20,
          text: "区域分快",
          subtext: "南丁格尔图",
          textStyle: {
            color: "white",
          },
          subtextStyle: {
            color: "white",
          },
        },
        legend: {
          top: "bottom",
          textStyle: {
            color: "white",
          },
        },
        tooltip: {},
        series: [
          {
            name: "各区项目",
            type: "pie",
            radius: [50, 250],
            roseType: "area",
            data: data,
          },
        ],
      };
      CharInstance.setOption(option);
    }
    //设置定时器
    function startInterval() {
      time = setInterval(() => {
        if (currentPage >= Totapage) {
          currentPage = 0;
        }
        currentPage++;
        DealData();
      }, 3000);
    }
  },
};
</script>

<style scoped>
.father {
  height: 100%;
  width: 100%;
}
#circale {
  height: 100%;
  width: 100%;
}
</style>
