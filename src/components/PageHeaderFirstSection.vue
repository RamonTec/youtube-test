<template>
  <div :class="{ 'hidden': fullWidth, 'flex gap-4 items-center flex-shrink-0': !fullWidth }">
      
    <button @click="action" type="button">
      <MenuIcon :size=34 />
    </button> 

    <a href="/">
      <img width="80px" class="h-6" :src="imagenLogo" alt="logo">
    </a>
    
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import logo from '../../assets/logo.png'; 

export default {
  props: {
    fullWidth: {
      required: false,
      type: Boolean,
    },
    action: {
      required: true,
    }
  },
  name: 'FirstSection',
  components: {
    MenuIcon,
  },
  setup() {
    const imagenLogo = logo;
    return {
      imagenLogo
    }
  },
}
</script>