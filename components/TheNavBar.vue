<template>
  <nav class="flex flex-col justify-between bg-black h-screen">
    <div class="flex flex-col items-center">
      <div class="nav-toggle flex justify-center items-center">
        <nuxt-link to="/">
          <img src="@/assets/images/hamburger_icon.svg" alt="Hamburger Icon">
        </nuxt-link>
      </div>
      <div class="nav-search">
        <a href="#">
          <img src="@/assets/images/Search_icon.svg" alt="Search Icon">
        </a>
      </div>
      <div class="nav-faq">
        <a href="#">
          <img src="@/assets/images/FAQ_icon.svg" alt="FAQ Icon">
        </a>
      </div>
      <hr class="divider">
      <div class="nav-items" v-for="(item, i) in navItems" :key="i">
        <div class="nav-item">
          <nuxt-link :to="`/products/${item.name}`">
            <component
              :is="item.svg"
              class="text-white fill-current w-full"
              :class="navItemClass(item)"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <div class="nav-logo flex justify-center">
        <nuxt-link to="/about">
          <img src="@/assets/images/k_logo.svg" alt="Kowloon Logo">
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import DogSymbol from '@/components/symbols/dog'
import CatSymbol from '@/components/symbols/cat'
import FishSymbol from '@/components/symbols/fish'
import BirdSymbol from '@/components/symbols/bird'
import HamsterSymbol from '@/components/symbols/hamster'

export default {
  components: {
      BirdSymbol,
  },
  data() {
    return {
      navItems: [
        {
          color: 'pink',
          name: 'dogs',
          svg: DogSymbol,
        },
        {
          color: 'indigo',
          name: 'cats',
          svg: CatSymbol,
        },
        {
          color: 'yellow',
          name: 'fish',
          svg: FishSymbol,
        },
        {
          color: 'green-light',
          name: 'birds',
          svg: BirdSymbol,
        },
        {
          color: 'blue-light',
          name: 'small-animals',
          svg: HamsterSymbol,
        },
      ],
    }
  },
  methods: {
    navItemClass(item) {
      if(this.$route.params.details === item.name) {
        return `hover:text-${item.color} text-${item.color}`
      } else {
        return `hover:text-${item.color}`
      }
    }
  },
}
</script>

