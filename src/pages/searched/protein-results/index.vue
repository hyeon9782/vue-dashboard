<template>
  <div>
    Searched Protein
    <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Summary from "../tabs/Summary.vue";
import Identification from "../tabs/Identification.vue";
import Quantification from "../tabs/Quantification.vue";

const currentTab = ref("Summary");

const tabs = {
  Summary,
  Identification,
  Quantification,
};
</script>
<style lang=""></style>
