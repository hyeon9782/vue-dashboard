<template>
  <div>
    Statistics Protein
    <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Processing from "@pages/statistics/tabs/Processing.vue";
import Normalization from "@pages/statistics/tabs/Normalization.vue";
import DifferentialTest from "@pages/statistics/tabs/DifferentialTest.vue";

const currentTab = ref("Processing");

const tabs = {
  Processing,
  Normalization,
  DifferentialTest,
};
</script>
<style lang=""></style>
