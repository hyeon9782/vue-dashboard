<template>
  <highcharts :options="chartOptions"></highcharts>
</template>
<script lang="ts" setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  series: [],
  xAxis: {},
  yAxis: {},
});
const { series, xAxis, yAxis } = toRefs(props);

const chartOptions = ref({
  chart: {
    type: "pie",
  },
  title: {
    text: "파이 차트",
  },
  xAxis,
  yAxis,
  series,
});
</script>
<style lang=""></style>
