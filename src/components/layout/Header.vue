<template>
  <header>
    <button @click="store.openSidebar">⭕</button>
    Header
  </header>
</template>
<script lang="ts" setup>
import { useSidebarStore } from "@/stores/sidebar";
const store = useSidebarStore();
</script>
<style lang="scss" scoped></style>
