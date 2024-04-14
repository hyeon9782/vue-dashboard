<template>
  <table>
    <thead>
      <tr v-for="head in props.thead" :key="head.id">
        <th v-for="th in head" :key="th.id">
          {{ th.content }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="body in props.tbody" :key="body.id">
        <td v-for="td in body" :key="td.id">{{ td.content }}</td>
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
