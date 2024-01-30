<template>
  <div>
    <aside
      class="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1"
      :class="{ 'lg:hidden' : storeAction.isLargeOpen, 'lg:flex' : !storeAction.isLargeOpen }"
    >
      <SmallSidebarItem />
    </aside>

    <div
      v-show="storeAction.isSmallOpen" 
      @click="close" 
      class="lg:hidden fixed inset-0 z-[999] bg-neutral-800 opacity-50"
    />


    <aside
      class="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2"
      :class="{ 'lg:flex' : storeAction.isLargeOpen, 'lg:hidden' : !storeAction.isLargeOpen, 'flex z-[999] bg-white max-h-screen': storeAction.isSmallOpen, 'hidden': !storeAction.isSmallOpen }"
    >

      <div class="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white ">
        <FirstSection :action="close" :fullWidth="showFullWidthSearch" />
      </div>

      <LargeSidebarSection />

    </aside>

  </div>
</template>

<script>

import SmallSidebarItem from './SmallSidebar.vue';
import LargeSidebarSection from './LargeSidebar.vue';
import { sidebarStatus } from '~/stores/index';
import FirstSection from './PageHeaderFirstSection.vue';

export default {
  name: 'sidebar',
  components: {
    SmallSidebarItem,
    LargeSidebarSection,
    FirstSection,
  },
  setup() {
    const storeAction = sidebarStatus();
    const { close } = storeAction;
    return {
      close,
      storeAction,
    }
  }
}
</script>

<style>

</style>