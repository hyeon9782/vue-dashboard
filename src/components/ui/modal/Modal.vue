<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal" v-show="isOpen">
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>
<script lang="ts" setup>
const props = defineProps({
  isOpen: Boolean,
});
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
