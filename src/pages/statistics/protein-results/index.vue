<template>
  <div>
    <SubHeader
      :tabs="tabs"
      @tab-change="currentTab = $event"
      :current-tab="currentTab"
    />

    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Processing from "@pages/statistics/tabs/Processing.vue";
import Normalization from "@pages/statistics/tabs/Normalization.vue";
import DifferentialTest from "@pages/statistics/tabs/DifferentialTest.vue";
import SubHeader from "@/components/layout/SubHeader.vue";
import { StatisticsTab } from "@/types/tabs";

const currentTab = ref("Processing");

const tabs: Record<string, StatisticsTab> = {
  Processing,
  Normalization,
  DifferentialTest,
};
</script>
<style lang=""></style>
