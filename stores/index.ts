import { defineStore } from 'pinia';

export const sidebarStatus = defineStore('sidebarStatus', {
  state: () => ({
    status: false,
    isLargeOpen: true,
    isSmallOpen: false,
  }),
  actions: {
    isScreenSmall() {
      
      return window.innerWidth < 1024
    },
    updateSidebar () {
      this.status = !this.status
    },
    handler () {
      if (!this.isScreenSmall()) this.isSmallOpen = false
    },
    togle () {
      if (this.isScreenSmall()) {
        
        this.isSmallOpen = !this.isSmallOpen;
      } else {
        
        this.isLargeOpen = !this.isLargeOpen;
      }
    },
    close() {
      if (this.isScreenSmall()) {
        this.isSmallOpen = false;
      } else {
        this.isLargeOpen = false;
      }
    }
  },
})