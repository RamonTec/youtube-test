import { defineStore } from 'pinia';

export const userStore = defineStore('userStore', {
  state: () => ({
    email: '',
    password: '',
  }),
  actions: {
    saveUser(email: string,password: string) {
      
      const newUser = {
        email: email,
        password: password,
      }

      this.$state = newUser;
      
    },
  },
})