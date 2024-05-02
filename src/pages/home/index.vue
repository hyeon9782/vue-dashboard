<template>
  <main class="page">
    <!-- <ChartWrap /> -->
    <DataGrid />
  </main>
</template>
<script lang="ts" setup>
import Loading from '@/components/loading/Loading.vue';
import { defineAsyncComponent } from 'vue';

const ChartWrap = defineAsyncComponent({
  loader: () => import('@/components/chart/ChartWrap.vue'),
  loadingComponent: Loading,
});

const DataGrid = defineAsyncComponent({
  loader: () => import('@/components/DataGrid.vue'),
  loadingComponent: Loading,
});
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
