<template>
  <Modal>
    <div class="modal-content">
      <h1>{{ props.title }}</h1>
      <h2>{{ props.content }}</h2>
      <button @click="props.onClose">취소</button>
      <button @click="props.onSubmit">확인</button>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import Modal from "@components/ui/modal/Modal.vue";
const props = defineProps({
  onClose: Function,
  onSubmit: Function,
  title: String,
  content: String,
});
</script>
<style lang="scss">
.modal-content {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
