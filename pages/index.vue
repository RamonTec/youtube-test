<template>
  <div class="max-h-screen flex flex-col">

    <PageHeader />

    <div class="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">

      <Sidebar />

      <div class="overflow-x-hidden px-8 pb-4">
        <div class="sticky top-0 bg-white z-10 pb-4">
          <Categorys />
        </div>

        <div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">

          <VideoScreen v-for="video in videosData"
            :postedAt="new Date(video.snippet.publishTime)"
            :title="video.snippet.title"
            :views="video.etag"
            :channelName="video.snippet.channelTitle"
            :channelProfile="video.snippet.channelTitle"
            :channelId="video.snippet.channelId"
            :videoId="video.id.videoId"
            :thumbnailUrl="video.snippet.thumbnails.high.url"
            :duration="video.etag"
            :url="video.snippet.thumbnails.default.url"
            :key="video.etag"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PageHeader from '~/src/layout/PageLayout.vue';
import Categorys from '~/src/components/Category.vue';
import VideoScreen from '~/src/components/VideoScreen.vue';
import Sidebar from '~/src/components/SideBar.vue';

export default {
  components: {
    PageHeader,
    Categorys,
    VideoScreen,
    Sidebar,
  },
  
  data() {
    const { getVideos } = useYoutube();
    return {
      getVideos,
      videosData: null,
    }
    
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {
      const videosFetch = await this.getVideos('', 15);
      this.videosData = videosFetch;

    },
  },
}
</script>