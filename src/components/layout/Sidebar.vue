<template>
  <Transition name="fade">
    <section class="sidebar" v-show="isShow">
      <button @click="store.closeSidebar">❌</button>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <span>Job</span>
          <li>
            <RouterLink to="/job/job-status">Job Status</RouterLink>
          </li>
          <li>
            <RouterLink to="/job/job-planning">Job Planning</RouterLink>
          </li>
          <span>Searched</span>
          <li>
            <RouterLink to="/searched/protein-results"
              >Protein Results</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/searched/glycoprotein-results"
              >Glycoprotein Results</RouterLink
            >
          </li>
          <span>Statistics</span>
          <li>
            <RouterLink to="/statistics/protein-results"
              >Protein Results</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/statistics/glycoprotein-results"
              >Glycoprotein Results</RouterLink
            >
          </li>
          <span>Network</span>
          <li>
            <RouterLink to="/network/protein-results"
              >Protein Results</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/network/glycoprotein-results"
              >Glycoprotein Results</RouterLink
            >
          </li>
        </ul>
      </nav>
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
  width: 250px;
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
