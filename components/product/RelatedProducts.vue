<template>
  <section>
    <h2 class="section-title uppercase mb-22px">Gerelateerde Producten</h2>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in 20" :key="i">
          <Card
            :img="dogCoolingMat"
            imgAlt="Dog cooling mat"
            :categoryColor="category.color"
            hoverFrame="details"
            sm
          />
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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