<template>
  <div class="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">

    <FirstSection :action="togle" :fullWidth="showFullWidthSearch" />

    <form :class="{ 'flex gap-4 flex-grow justify-center': showFullWidthSearch, 'hidden md:flex' : !showFullWidthSearch }">

      <button v-show="showFullWidthSearch" @click="changeStatus()">
        <ArrowLeft :size=34 class="flex-shrink-0" />
      </button>

      <div class="flex flex-grow max-w-[600px]">
        <input 
          type="search" 
          placeholder="Search" 
          class="rounded-l-full border border-secondary-border shadow-inner shadow-secondary w-full py-1 px-4 text-lg  focus:border-blue-500 outline-none" 
        />

        <button class="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0 bg-gray-200">
          <SearchWeb :size=34 />
        </button>
      </div>

      <button>
        <Microphone :size=34 class="flex-shrink-0" />
      </button>
      
    </form>

    <div :class="{ 'hidden': showFullWidthSearch, 'flex flex-shrink-0 md:gap-4 sm:gap-6': !showFullWidthSearch }">

      <button @click="changeStatus()" class="md:hidden">
        <SearchWeb :size=34 />
      </button>

      <button class="md:hidden">
        <Microphone :size=34 class="flex-shrink-0" />
      </button>

      <button v-show="userAction.email !== ''" type="button">
        <Upload :size=30 />
      </button>

      <button v-show="userAction.email !== ''" type="button">
        <Bell :size=30 />
      </button> 

      <button @click="logout" v-show="userAction.email !== ''" type="button">
        <Account :size=30 />
      </button>
      
      <button v-show="userAction.email === ''" type="button">
        <DotsVertical :size=30 />
      </button> 

      <NuxtLink to="/login">
        <button class="flex rounded-full border border-secondary-border w-full px-5 gap-2" v-show="userAction.email === ''" type="button">
          <AccountLogin class="mt-2" :size=30 />
          <div class="mt-3">Sign in</div>
        </button> 
      </NuxtLink>

    </div>

  </div>
</template>
 
<script>

import Upload from 'vue-material-design-icons/Upload.vue';
import Bell from 'vue-material-design-icons/BellOutline.vue';
import Account from 'vue-material-design-icons/Account.vue';
import Microphone from 'vue-material-design-icons/MicrophoneOutline.vue';
import SearchWeb from 'vue-material-design-icons/Magnify.vue';
import { defineComponent, ref } from "vue";
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import FirstSection from '~/src/components/PageHeaderFirstSection.vue';
import { sidebarStatus } from '~/stores/index';
import { userStore } from '~/stores/user';

import AccountLogin from 'vue-material-design-icons/AccountCircleOutline.vue';
import DotsVertical from 'vue-material-design-icons/DotsVerticalCircleOutline.vue';

export default defineComponent({
  name: 'PageHeader',
  components: {
    Upload,
    Bell,
    Account,
    Microphone,
    SearchWeb,
    ref,
    ArrowLeft,
    FirstSection,
    AccountLogin,
    DotsVertical,
  },
  setup() {
    const storeAction = sidebarStatus();
    const userAction = userStore();
    const showFullWidthSearch = ref(false);
    const { updateSidebar, togle } = storeAction;
    return {
      togle,
      updateSidebar,
      storeAction,
      showFullWidthSearch,
      userAction,
    }
  },
  computed: {
    isSearchVisible() {
      return this.showFullWidthSearch;
    },
  },
  methods: {  
    changeStatus() {
      this.showFullWidthSearch = !this.showFullWidthSearch;
    },
    async logout() {
      const { logOut } = useFirebaseAuth();
      const logoutUsr = await logOut();
      console.log(logoutUsr);
    }
    
  },
})
</script>