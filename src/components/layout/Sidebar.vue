<template>
  <Transition name="fade">
    <section class="sidebar" v-show="isShow">
      <button @click="store.closeSidebar">❌</button>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </section>
  </Transition>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useSidebarStore } from "@stores/sidebar";
const store = useSidebarStore();
const { isShow } = storeToRefs(store);
</script>
<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
