<template>
  <button>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { toRefs } from "vue";
const props = defineProps({});

const { color } = toRefs(props);
</script>
<style lang=""></style>
