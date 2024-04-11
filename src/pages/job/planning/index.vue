<template>
  <div>
    <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import JobPlanning from "../tabs/JobPlanning.vue";
import ParameterFileEditing from "../tabs/ParameterFileEditing.vue";
const currentTab = ref("JobPlanning");

const tabs = {
  JobPlanning,
  ParameterFileEditing,
};
</script>
<style lang=""></style>
