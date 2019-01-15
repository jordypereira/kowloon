<template>
  <nav class="flex flex-col justify-between bg-black h-screen">
    <div class="flex flex-col items-center">
      <div class="nav-toggle flex justify-center items-center">
        <nuxt-link to="/" class="icon icon-hamburger" aria-label="Toggle the navigation pane."></nuxt-link>
      </div>
      <div class="flex nav-search">
        <i class="icon icon-search"></i>
      </div>
      <div class="flex nav-faq">
        <i class="icon icon-faq"></i>
      </div>
      <hr class="divider">
      <div class="nav-items" v-for="(item, i) in navItems" :key="i">
        <div class="nav-item">
          <nuxt-link
            :to="`/products/${item.name[0]}/view`"
            :aria-label="`Links to the ${item.name[0]} product page.`"
          >
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
        <nuxt-link to="/" class="icon icon-k" aria-label="Links to the home page"></nuxt-link>
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
          name: ['dogs', 'dog', 'Dog', 'Dogs'],
          icon: 'icon-dog-small',
          svg: DogSymbol,
        },
        {
          color: 'indigo',
          name: ['cats', 'cat', 'Cat', 'Cats'],
          icon: 'icon-cat-small',
          svg: CatSymbol,
        },
        {
          color: 'yellow',
          name: ['fish', 'Fish', 'Fishes', 'fishes'],
          icon: 'icon-fish-small',
          svg: FishSymbol,
        },
        {
          color: 'green-light',
          name: ['birds', 'Birds', 'Bird', 'bird'],
          icon: 'icon-bird-small',
          svg: BirdSymbol,
        },
        {
          color: 'blue-light',
          name: ['small-animals', 'small animals', 'Small-Animals', 'Small Animals'],
          icon: 'icon-small-animal-small',
          svg: HamsterSymbol,
        },
      ],
    }
  },
  methods: {
    navItemClass(item) {
      if(item.name.includes(this.$route.params.name)) {
        return `hover:text-${item.color} text-${item.color} ${item.icon}`
      } else {
        return `hover:text-${item.color} ${item.icon}`
      }
    }
  },
}
</script>

