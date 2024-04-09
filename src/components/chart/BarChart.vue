<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, toRefs } from "vue";
import Highcharts from "highcharts";

const props = defineProps({
  series: [],
  xAxis: {},
  yAxis: {},
});
const { series, xAxis, yAxis } = toRefs(props);

const chartOptions = ref({
  chart: {
    type: "bar",
  },
  title: {
    text: "바 차트",
  },
  xAxis,
  yAxis,
  series,
});

onMounted(() => {
  Highcharts.chart("chart", chartOptions.value);
});
</script>
<style lang=""></style>
