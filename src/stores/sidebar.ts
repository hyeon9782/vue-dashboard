import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isShow: true,
  }),
  getters: {},
  actions: {
    toggleSidebar() {
      this.isShow = !this.isShow;
    },
    openSidebar() {
      this.isShow = true;
    },
    closeSidebar() {
      this.isShow = false;
    },
  },
});
