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
import Summary from "../tabs/Summary.vue";
import Identification from "../tabs/Identification.vue";
import Quantification from "../tabs/Quantification.vue";
import SubHeader from "@/components/layout/SubHeader.vue";

const currentTab = ref("Summary");

type TabComponent =
  | typeof Summary
  | typeof Identification
  | typeof Quantification;

const tabs: Record<string, TabComponent> = {
  Summary,
  Identification,
  Quantification,
};
</script>
<style lang=""></style>
