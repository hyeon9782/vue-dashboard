<script setup lang="ts">
import MainHeader from "@components/layout/MainHeader.vue";
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <div class="box">
    <Sidebar />

    <main class="container">
      <MainHeader />
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "MBC1961GulimM";
}

.box {
  display: flex;
}

.container {
}
</style>
