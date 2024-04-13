<template>
  <highcharts :options="chartOptions"></highcharts>
</template>
<script lang="ts" setup>
import { ref, toRefs } from "vue";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

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
</script>
<style lang=""></style>
