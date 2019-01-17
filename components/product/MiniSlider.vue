<template>
  <section>
    <div v-swiper:mySwiper="swiperOption" class="bg-grey-800 border border-grey m-0">
      <div class="swiper-wrapper">
        <div class="swiper-slide card-xs border border-grey m-7px mr-0" v-for="i in 10" :key="i">
          <nuxt-link :to="url" class="text-white no-underline">
            <img :src="dogCoolingMat" imgAlt="Dog cooling mat" class="img-cover">
          </nuxt-link>
        </div>
      </div>
      <div v-if="arrows" class="swiper-button-prev" slot="button-prev"></div>
      <div v-if="arrows" class="swiper-button-next" slot="button-next"></div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/cards/Card'
import dogCoolingMat from '@/assets/images/products/dog_cooling_mat--square.jpg'

export default {
  name: 'MiniSlider',
  props: {
    category: Object,
    url: String,
    arrows: Boolean,
  },
  components: {
    Card,
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
      dogCoolingMat,
    }
  },
}
</script>