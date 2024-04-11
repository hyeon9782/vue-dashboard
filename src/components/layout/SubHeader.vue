<template>
  <ul class="sub-header">
    <li
      v-for="(_, tab) in tabs"
      :key="tab"
      @click="emitTabChange(tab)"
      class="sub-header-item"
      :class="{ active: tab === currentTab }"
    >
      {{ tab }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
defineProps({
  tabs: {},
  currentTab: String,
});

const emits = defineEmits(["tabChange"]);

function emitTabChange(tab: string) {
  emits("tabChange", tab);
}
</script>
<style lang="scss" scoped>
.sub-header {
  display: flex;
  gap: 10px;
  .sub-header-item {
    list-style: none;
    padding: 10px;
    background-color: lightgray;
    color: black;
  }

  .active {
    background-color: black;
    color: white;
  }
}
</style>
