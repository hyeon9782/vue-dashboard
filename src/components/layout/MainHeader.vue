<template>
  <header>
    {{ currentRoute.name }}
  </header>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const currentRoute = router.currentRoute;
</script>
<style lang="scss" scoped></style>
