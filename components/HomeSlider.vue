<template>
  <div v-swiper:mySwiper="swiperOption" class="max-h-480px">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in images" :key="item.id">
        <img :src="item.url" alt="Slider Image of a dog" class="w-full">

        <div class="swiper-pagination w-full pin-b mb-22px" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedProducts',
  props: {
      images: Array,
  },
  data () {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          // autoplay: {
          //   delay: 2500,
          //   disableOnInteraction: false
          // },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'home-bullet',
            bulletActiveClass: 'home-bullet-active',
          },
        },
      }
    },
}
</script>