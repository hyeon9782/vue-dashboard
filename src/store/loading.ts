import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    apiCount: 0,
  }),
  getters: {
    isLoading: (state) => state.apiCount > 0,
  },
  actions: {
    startProgress() {
      this.apiCount++;
    },
    stopProgress() {
      this.apiCount--;
    },
  },
});
