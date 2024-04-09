<script setup lang="ts">
import Header from "@components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <Header />
  <main class="container">
    <Sidebar />
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: "MBC1961GulimM";
}

.container {
  display: flex;
}
</style>
