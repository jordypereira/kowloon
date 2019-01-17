<template>
  <div>
    <!-- Slider -->
    <header class="relative flex justify-center max-w-full">
      <i class="mt-13 absolute z-10 icon icon-kowloon"></i>
      <HomeSlider :images="homeSliderImages"/>
    </header>

    <main class="container px-4 md:px-0 mx-auto text-white">
      <!-- Description -->
      <p class="hidden md:block text-center w-3/4 mx-auto mt-51px">{{ introText.web }}</p>
      <p class="mx-auto mt-28px">{{ introText.mobile }}</p>

      <!-- Categories -->
      <Categories class="mt-10 mx-12 md:mx-0"/>

      <!-- Hot Items -->
      <section v-if="hotItems" class="hidden md:block mt-16">
        <h1 class="title uppercase mb-28px">Hot Items.</h1>
        <HotProducts :items="hotItems" :itemsToShow="3"/>
        <div class="text-right w-full mt-22px">
          <a href="#" class="section-link">Visit the store</a>
        </div>
      </section>

      <section class="block md:hidden mt-16">
        <h1 class="title uppercase mb-28px">Hot Items.</h1>
        <RelatedProducts
          class="mb-58px"
          :category="this.$store.getters.getCategory(this.$route.params.name)"
          :url="`/products/${this.$store.getters.getCategory(this.$route.params.name).name}/details`"
        />
      </section>

      <!-- NewsletterBanner -->
      <NewsletterBanner class="mt-34px mb-24"/>
    </main>
  </div>
</template>

<script>
import Categories from '@/components/Categories'
import HomeSlider from '@/components/HomeSlider'
import NewsletterBanner from '@/components/NewsletterBanner'
import HotProducts from '@/components/product/HotProducts'
import RelatedProducts from '~/components/product/RelatedProducts'

import hotItems from '@/services/hotItems'
import homeSliderImages from '@/services/homeSliderImages'

export default {
  name: 'Home',
  components: {
    HomeSlider,
    Categories,
    NewsletterBanner,
    HotProducts,
    RelatedProducts,
  },
  data() {
    return {
      introText: {
        web: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        mobile: 'Hier komt een tekst, let wel deze is korter en bondiger dan de desktop en tabletversie. dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qu deserunt mollit anim id est laborum.',
      },
      hotItems,
      homeSliderImages,
    }
  },
}
</script>

