<template>
  <div>
    <h2 class="section-title">GERELATEERDE PRODUCTEN</h2>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide border-primary flex justify-center hover:bg-pink"
          v-for="i in 20"
          :key="i"
        >
          <img src="~assets/images/products/dog_cooling_mat--thumbnail.png" class="w-full">
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <div class="text-right w-full">
      <a href="#" class="section-link">view more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedProducts',
  data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: false,
          spaceBetween: 10,
        },
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