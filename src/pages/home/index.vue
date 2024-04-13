<template>
  <main class="page">
    <LineChart :xAxis="xAxis" :yAxis="yAxis" :series="series" />
    <BarChart :xAxis="xAxis" :yAxis="yAxis" :series="series" />
    <PieChart :xAxis="xAxis" :yAxis="yAxis" :series="series" />
  </main>
</template>
<script lang="ts" setup>
import LineChart from "@/components/chart/LineChart.vue";
import BarChart from "@/components/chart/BarChart.vue";
import PieChart from "@/components/chart/PieChart.vue";
import { ref } from "vue";

const xAxis = ref({});
const yAxis = ref({});
const series = ref([
  {
    name: "온도",
    data: [87.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
  },
]);
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: lightcyan;
}
</style>
