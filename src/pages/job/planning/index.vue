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
import JobPlanning from "../tabs/JobPlanning.vue";
import ParameterFileEditing from "../tabs/ParameterFileEditing.vue";
import SubHeader from "@/components/layout/SubHeader.vue";
const currentTab = ref("JobPlanning");

type TabComponent = typeof JobPlanning | typeof ParameterFileEditing;

const tabs: Record<string, TabComponent> = {
  JobPlanning,
  ParameterFileEditing,
};
</script>
<style lang=""></style>
