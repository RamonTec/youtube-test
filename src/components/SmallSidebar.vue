<template>
  <div>
    <a href="url" class="py-4 px-1 flex flex-col items-center rounded-lg gap-1">
      <Home class="w-6 h-6" />
      <div class="text-xs">Home</div>
    </a>

    <a href="url" class="py-4 px-1 flex flex-col items-center rounded-lg gap-1">
      <Play class="w-6 h-6" />
      <div class="text-xs">Shorts</div>
    </a>

    <a href="url" class="py-4 px-1 flex flex-col items-center rounded-lg gap-1">
      <YoutubeSubscription class="w-6 h-6" />
      <div class="text-xs">Subscriptions</div>
    </a>

    <a href="url" class="py-4 px-1 flex flex-col items-center rounded-lg gap-1">
      <PlayBoxMultipleOutline class="w-6 h-6" />
      <div class="text-xs">You</div>
    </a>
  </div>
</template>

<script>
import Home from 'vue-material-design-icons/Home.vue';
import Play from 'vue-material-design-icons/PlayNetwork.vue';
import YoutubeSubscription from 'vue-material-design-icons/YoutubeSubscription.vue';
import PlayBoxMultipleOutline from 'vue-material-design-icons/PlayBoxMultipleOutline.vue';

export default {
  components: {
    Home,
    Play,
    YoutubeSubscription,
    PlayBoxMultipleOutline
  },
}
</script>