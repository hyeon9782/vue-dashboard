<template>
  <button>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { toRefs } from "vue";
interface Button {
  color?: String;
}

const props = defineProps<{ data: Button }>();

const { color } = toRefs(props);
</script>
<style lang=""></style>
