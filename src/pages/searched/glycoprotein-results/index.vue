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
import { SearchedTab } from "@/types/tabs";

const currentTab = ref("Summary");

const tabs: Record<string, SearchedTab> = {
  Summary,
  Identification,
  Quantification,
};
</script>
<style lang=""></style>
