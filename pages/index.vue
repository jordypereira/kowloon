<template>
  <section>
    <header class="relative flex justify-center w-full">
      <div class="mt-13 absolute z-10">
        <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
      </div>
      <HomeSlider :images="homeSliderImages"/>
    </header>
    <div class="container mx-auto text-white">
      <p
        class="text-center w-3/4 mx-auto mt-51px"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Categories class="mt-10"/>
    </div>
  </section>
</template>

<script>
import HomeSlider from '@/components/HomeSlider'
import HomeSliderImage1 from '@/assets/images/home/home-visual-1.png'
import HomeSliderImage2 from '@/assets/images/home/home-visual-2.png'
import Categories from '@/components/Categories'

export default {
  name: 'Home',
  components: {
      HomeSlider,
      Categories,
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
          id: 1,
          url: HomeSliderImage1,
        },
      ],
    }
  },
}
</script>

