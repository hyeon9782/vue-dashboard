<template>
  <highcharts v-if="chartOptions" :options="chartOptions"></highcharts>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

const chartOptions = ref({});

const fetchChartData = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: '온도',
          data: [
            87.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          ],
        },
      ]);
    }, 3000);
  });

  chartOptions.value = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'pie chart',
    },
    xAxis: [],
    yAxis: [],
    series: response,
  };
};

onBeforeMount(async () => {
  await fetchChartData();
});
</script>
<style lang=""></style>
