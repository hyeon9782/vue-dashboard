<template>
  <table>
    <thead>
      <tr v-for="head in thead" :key="head.id">
        <th v-for="td in head" :key="td.id">
          {{ td.item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
const props = defineProps({
  thead: [],
  tbody: [],
});
</script>
<style lang=""></style>
