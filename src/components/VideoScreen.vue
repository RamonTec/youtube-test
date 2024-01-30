<template>
  <div class="flex flex-col gap-2 bg-gray-50"
      @mouseenter="playVideoFun"
        @mouseleave="pauseVideo"
  >
  
    <a class="relative aspect-video" :href="'/watch?=' + videoId">

      <img 
        :src="thumbnailUrl" 
        class="block w-full h-full object-cover transition-[border-radius] duration-200" 
        :class="{ 'rounded-xl': !isVideoPlay, 'rounded-none': isVideoPlay }"
      />

      <div class="absolute bottom-1 right-1 bg-black text-white text-sm px-0.5 rounded">
        {{ formatDuration(duration) }}
      </div>

      <video
        :onPlay="isVideoPlay"
        class="block h-full object-cover absolute inset-0 transition-opacity duration-200" 
        :class="{ 'opacity-100 delay-200': isVideoPlay, 'opacity-0': !isVideoPlay }"
        ref="videoRef"
        muted
        :src="url"
      />

    </a>

    <div class="flex gap-2">
      <a :href=" '/@' + channelId " class="flex-shrink-0">
        <img class="w-12 h-12 rounded-full" :src="channelProfile">
      </a>

      <div class="flex flex-col">

        <a class="font-bold" :href="'/watch?v=' + videoId">{{ title }}</a>

        <a :href=" '/@' + channelId " class="flex-shrink-0 text-black text-sm">
          {{ channelName }}
        </a>

        <div class="text-black text-sm">
          {{ viewFormatter(views) }} Views • {{ formatTimeAgo(postedAt) }}
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { formatDuration } from '../utils/formatDuration';
import { formatNumber } from '../utils/viewFormatter';
import { formatTimeAgo } from '../utils/formatTimeAgo';

export default defineComponent ({
  name: 'VideoScreen',
  props: {
    postedAt: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    views: {
      type: String,
      required: false,
    },
    channelName: {
      type: String,
      required: false,
    },
    channelProfile: {
      type: String,
      required: false,
    },
    channelId: {
      type: String,
      required: false,
    },
    videoId: {
      type: String,
      required: false,
    },
    thumbnailUrl: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      requeired: false
    }
  },
  setup(props) {
    const isVideoPlayRef = ref(false);
    const durationRef = ref(props.duration);
    const formatDurationRef = ref(formatDuration);
    const viewFormatterRef = ref(formatNumber);
    const formatTimeAgoRef = ref(formatTimeAgo);

    const playVideo = () => {
      isVideoPlayRef.value = true
    };

    const pauseVideo = () => {
      isVideoPlayRef.value = false
    };

    return {
      playVideoFun: playVideo,
      pauseVideo,
      duration: durationRef,
      formatDuration: formatDurationRef,
      viewFormatter: viewFormatterRef,
      formatTimeAgo: formatTimeAgoRef,
      isVideoPlay: isVideoPlayRef,
    };
  },
  methods: {
    setDisplayVideo() {
      this.isVideoPlay = !this.isVideoPlay;
    }
  }
})
</script>

<style>

</style>