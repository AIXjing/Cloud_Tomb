<template>
  <div class="flex flex-wrap w-full relative">
    <div
        class="absolute w-full"
        v-for="(color,index) in slides"
        :key="color">
      <transition name="fade">
        <div v-if="currentSlide==index"
             :class="color"
             style="height:350px">
        </div>
      </transition>
    </div>
    <div class="absolute w-full" style="height:340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
            v-for="(slider,index) in slides"
            :key="slider"
            @click="makeActive(index)"
            :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-200' "
            class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md">
        </div>
      </div>
    </div>
    <!--    <div class="my-10 flex w-full">-->
    <!--      <div class="m-auto">-->
    <!--        <transition name="fade">-->
    <!--          <h1 v-if="isTitleShowing">Slider Carousel</h1>-->
    <!--        </transition>-->
    <!--        <button-->
    <!--            @click="isTitleShowing=!isTitleShowing"-->
    <!--            class="px-2 rounded border"-->
    <!--        >-->
    <!--          Toggle-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      slides: ['bg-blue-500', 'bg-yellow-500', 'bg-pink-500'],
      interval: "",
      // isTitleShowing: true,
    }
  },
  methods: {
    makeActive(index){
      this.currentSlide = index
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      // console.log("I am changing current slide", this.currentSlide)
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
      // if (this.currentSlide == 2) {
      //   this.currentSlide = 0;
      // } else {
      //   this.currentSlide++;
      // }
    }, 3000)
  },

  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
