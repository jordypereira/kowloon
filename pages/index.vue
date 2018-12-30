<template>
  <section>
    <header class="relative flex justify-center w-full">
      <div class="mt-13 absolute z-10">
        <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
      </div>
      <HomeSlider :images="homeSliderImages"/>
    </header>
    <div class="container mx-auto text-white">
      <p class="text-center w-3/4 mx-auto mt-51px">{{ introText }}</p>

      <Categories class="mt-10"/>

      <div v-if="hotItems" class="mt-16">
        <div class="title uppercase mb-28px">Hot Items.</div>
        <HotProducts :items="hotItems"/>
        <div class="text-right w-full mt-22px">
          <a href="#" class="section-link">Visit the store</a>
        </div>
      </div>

      <NewsletterBanner class="mt-34px mb-24"/>
    </div>
  </section>
</template>

<script>
import Categories from '@/components/Categories'
import HomeSlider from '@/components/HomeSlider'
import NewsletterBanner from '@/components/NewsletterBanner'
import HotProducts from '@/components/product/HotProducts'

import HomeSliderImage1 from '@/assets/images/home/home-visual-1.jpg'
import HomeSliderImage2 from '@/assets/images/home/home-visual-2.jpg'
import hotItems from '@/services/hotItems'

export default {
  name: 'Home',
  components: {
      HomeSlider,
      Categories,
      NewsletterBanner,
      HotProducts,
  },
  data() {
    return {
      homeSliderImages: [
        {
          id: 1,
          url: HomeSliderImage1,
        },
        {
          id: 2,
          url: HomeSliderImage2,
        },
        {
          id: 3,
          url: HomeSliderImage1,
        },
      ],
      introText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      hotItems,
    }
  },
}
</script>

