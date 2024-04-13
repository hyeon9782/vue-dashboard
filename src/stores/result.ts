import { defineStore } from "pinia";

export const useResultStore = defineStore("result", {
  state: () => ({
    results: [],
    selectedResults: [],
  }),
  getters: {},
  actions: {
    selectResult(id: string) {
      this.selectedResults = this.results.find((result) => result.id === id);
    },
  },
});
