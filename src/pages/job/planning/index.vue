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
import { JobTab } from "@/types/tabs";
const currentTab = ref("JobPlanning");

const tabs: Record<string, JobTab> = {
  JobPlanning,
  ParameterFileEditing,
};
</script>
<style lang=""></style>
