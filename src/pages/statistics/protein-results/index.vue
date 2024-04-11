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

const currentTab = ref("Processing");

type TabComponent =
  | typeof Processing
  | typeof Normalization
  | typeof DifferentialTest;

const tabs: Record<string, TabComponent> = {
  Processing,
  Normalization,
  DifferentialTest,
};
</script>
<style lang=""></style>
