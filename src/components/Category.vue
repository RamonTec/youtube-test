<template>
  <div class="overflow-x-hidden relative">
    <div class="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
    :style="{ transform: `translateX(-${this.translate}px)` }"
    >
      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100
      focus:bg-slate-800">
        All
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        JavaScript
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Remix
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Music
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Gaming
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Manga
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        In real time
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Cars
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        News
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Tecnology
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Cars
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Live
      </button>

      <button class="py-1 px-3 rounded-lg whitespace-nowrap bg-gray-100">
        Palword
      </button>
    
    </div>

    <div @click="this.setTranslate()" v-show="this.leftIsVisible" class="absolute left-0 top-1/2 -translate-y-1/2
    bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
      <button class="h-full aspect-square w-auto p-1.5">
        <ChevronLeft />
      </button>
    </div>

    <div  @click="this.increaseTranslate()" v-show="this.rightIsVisible" class="absolute right-0 top-1/2 -translate-y-1/2
    bg-gradient-to-l from-white from-50% to-transparent w-20 h-full flex justify-end">
      <button class="h-full aspect-square w-auto p-1.5">
        <ChevronRight />
      </button>
    </div>

  </div>
</template>

<script>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'Categorys',
  components: {
    ChevronLeft,
    ChevronRight,
  },
  setup() {
    const containerRef = ref(null);
    const translateAmountMove = ref(205);
    const translate = ref(0);
    const maxTranslate = ref(305);

    const leftIsVisible = ref(false);
    const rightIsVisible = ref(true);

    const setTranslate = () => {
      translate.value = calculateNewTranslate(translate.value, translateAmountMove.value);
    };

    const calculateNewTranslate = (currentTranslate, amount) => {
      const newTranslate = currentTranslate - amount;      
      return newTranslate <= 0 ? 0 : newTranslate;
    };

    const increaseTranslate = () => {
      const newTranslate = translate.value + translateAmountMove.value;
      translate.value = newTranslate <= maxTranslate.value ? newTranslate : maxTranslate.value;
    };

    watch(translate, (newValue) => {
      if (newValue === 305) {
        rightIsVisible.value = false
        leftIsVisible.value = true
      } else if (newValue === 0) {
        rightIsVisible.value = true
        leftIsVisible.value = false
      }
    })

    return {
      increaseTranslate,
      containerRef,
      setTranslate,
      translateAmountMove,
      translate,
      rightIsVisible, 
      leftIsVisible,
    }
  },
  methods: {
    setLeftIsVisible() {
      this.leftIsVisible = !this.leftIsVisible;
    },
    setRightIsVisible() {
      this.rightIsVisible = !this.rightIsVisible;
    },
  },
})
</script>
