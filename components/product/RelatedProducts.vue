<template>
  <section>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 20" :key="i">
          <Card
            :img="dogCoolingMat"
            imgAlt="Dog cooling mat"
            :category="category"
            :url="url"
            hoverFrame="details"
            sm
          />
        </div>
      </div>
      <div v-if="arrows" class="swiper-button-prev" slot="button-prev">
        <div class="z-10 relative w-4/5 h-full flex justify-center items-center">
          <div class="icon icon-arrow icon-arrow-prev"></div>
        </div>
        <div class="swiper-button-background"></div>
      </div>
      <div v-if="arrows" class="swiper-button-next" slot="button-next">
        <div class="z-10 w-4/5 h-full flex justify-center items-center absolute">
          <div class="absolute pin-r">
            <div class="icon icon-arrow icon-arrow-next"></div>
          </div>
        </div>
        <div class="swiper-button-background"></div>
      </div>
    </div>
    <div class="text-right w-full mt-14px">
      <a href="#" class="section-link">view more</a>
    </div>
  </section>
</template>

<script>
import Card from '@/components/cards/Card'
import dogCoolingMat from '@/assets/images/products/dog_cooling_mat--thumbnail.png'

export default {
  name: 'RelatedProducts',
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
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      dogCoolingMat,
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: 204px;
  height: 147px;
}
</style>