<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Highcharts from "highcharts";
const chartOptions = ref({
  chart: {
    type: "line",
  },
  title: {
    text: "라인 차트",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "온도 (℃)",
    },
  },
  series: [
    {
      name: "온도",
      data: [
        7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
      ],
    },
  ],
});

onMounted(() => {
  Highcharts.chart("chart", chartOptions.value);
});
</script>
<style lang=""></style>
