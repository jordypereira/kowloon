<template>
  <div v-swiper:mySwiper="swiperOption" class="max-h-480px">
    <div class="home-swiper-wrapper swiper-wrapper">
      <div class="swiper-slide mr-0 md:mr-auto" v-for="item in images" :key="item.id">
        <img :src="item.url" alt="Slider Image of a dog" class="img-cover">

        <div class="hidden md:block swiper-pagination w-full pin-b mb-22px" slot="pagination"></div>
        <div :class="{'swiper-loader': progressBar}">
          <div :class="{'swiper-loader-1': progressBar}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeSlider',
  props: {
      images: Array,
  },
  data () {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
          speed: 0,
          roundLengths: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'home-bullet',
            bulletActiveClass: 'home-bullet-active',
          },
          watchSlidesProgress: true,
          watchSlidesVisibility: true,
        },
        progressBar: true,
      }
    },
    mounted() {
      this.mySwiper.on('autoplayStop', () => {
        this.progressBar = false
      })
    }
}
</script>