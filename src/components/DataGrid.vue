<template>
  <div>
    <div v-for="article in articles" :key="articles.slug">
      {{ article.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { instance } from '@/apis/instance';
import { ref, onBeforeMount, onMounted } from 'vue';
const articles = ref([]);
const fetcTableData = async () => {
  const response = await instance.get('/articles');

  console.log(response);

  articles.value = response.data.articles;
};

onMounted(() => {
  fetcTableData();
});
</script>
<style lang="scss" scoped></style>
