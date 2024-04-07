<template>
  <div class="father">
    <h2>《China-Project-BIG-Data-SHOW》</h2>
    <div class="top">
      <div class="top-left show-top">
        <page>
          <bar></bar>
        </page>
      </div>
      <div class="top-right show-top">
        <page>
          <lines></lines>
        </page>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left show-bottom">
        <page>
          <pie></pie>
        </page>
      </div>
      <div class="bottom-right show-bottom">
        <page>
          <radar></radar>
        </page>
      </div>
    </div>
    <div class="body-center">
      <page>
        <nightingale></nightingale>
      </page>
    </div>
  </div>
</template>

<script>
import Page from "@/components/page.vue"
import Bar from '@/components/Bar.vue'
import Lines from '@/components/Line.vue'
import Nightingale from '@/components/Nightingale.vue'
import Radar from '@/components/radar.vue'
import Pie from '@/components/pie.vue'



export default {
  name: "BaseBox",
  components: {
    Page: Page,
    Bar: Bar,
    Lines: Lines,
    Nightingale: Nightingale,
    Radar: Radar,
    Pie: Pie
  },
};
</script>

<style lang="css" scoped>
h2 {
  position: absolute;
  margin: 0 auto;
  z-index: 1;
  color: white;
  margin-left: 35%;
}
.father {
  height: 100%;
  widows: 100%;
  display: flex;
}
.top {
  height: 50%;
  width: 100%;
  display: flex;
  /* border:1px solid red ; */
}
.bottom {
  height: 50%;
  width: 100%;
  position: absolute;
  display: flex;
  /* border:1px solid red ; */
  margin-top: 22%;
}
.show-top {
  height: 280px;
  width: 300px;
  margin: 0 auto;
  /* border: 1px solid black; */
}
.top-left {
  margin-left: 0px;
  border: 1px solid rgb(170, 202, 243, 0.86);
  border-radius: 10px;
  box-shadow: 1px 0.5px rgba(93, 96, 100, 0.86);
  color: white;
  /* background-color: blueviolet; */
}
.top-right {
  margin-right: 0px;
  border: 1px solid rgb(170, 202, 243, 0.86);
  border-radius: 10px;
  box-shadow: -1px 1px 0px -0.5px rgba(93, 96, 100, 0.86);
  color: white;
  /* background-color: cadetblue; */
}
.show-bottom {
  height: 280px;
  width: 300px;
  margin: 0 auto;
  color: white;
  /* border: 1px solid black; */
}
.bottom-left {
  margin-left: 0px;
  border: 1px solid rgb(170, 202, 243, 0.86);
  border-radius: 10px;
  box-shadow: 1px 0.5px rgba(93, 96, 100, 0.86);
  color: white;
}
.bottom-right {
  margin-right: 0px;
  border: 1px solid rgb(170, 202, 243, 0.86);
  border-radius: 10px;
  box-shadow: -1px 1px 0px -0.5px rgba(93, 96, 100, 0.86);
  color: white;
}
.body-center {
  height: 590px;
  width: 680px;
  margin-left: 25%;
  position: absolute;
  border: 1px solid rgb(170, 202, 243, 0.86);
  border-radius: 10px;
  box-shadow: 1px -0.5px rgba(93, 96, 100, 0.86);
  color: white;
}
</style>