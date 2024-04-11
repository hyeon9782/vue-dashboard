<template>
  <header>
    {{ router.currentRoute.value.name }}
  </header>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style lang="scss" scoped></style>
