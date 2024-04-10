import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    modals: [],
  }),
  getters: {},
  actions: {
    openModal(component, props) {
      this.modals = [...this.modals, { component, props }];
    },
    closeModal() {
      this.modals = this.modals.filter(
        (modal) => modal.component !== component
      );
    },
  },
});
