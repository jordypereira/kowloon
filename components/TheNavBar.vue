<template>
  <div class="relative">
    <nav
      class="static flex flex-col justify-between bg-black h-full"
      :class="{'nav-open': navToggle}"
    >
      <div class="flex flex-col">
        <div class="nav-toggle flex justify-center items-center">
          <i
            class="icon icon-hamburger hover:cursor-pointer"
            aria-label="Toggle the navigation pane."
            @click="navToggle = !navToggle"
          ></i>
        </div>
        <div class="flex items-center nav-search">
          <div class="w-60px flex justify-center">
            <i class="icon icon-search"></i>
          </div>
          <span v-if="navToggle" class="text-nav text-grey-400">Search</span>
        </div>
        <div class="flex items-center nav-faq">
          <div class="w-60px flex justify-center">
            <i class="icon icon-faq"></i>
          </div>
          <span v-if="navToggle" class="text-nav text-grey-400">FAQ</span>
        </div>
        <hr class="divider">
        <div class="flex items-center">
          <div class="w-60px flex justify-center">
            <nuxt-link to="/about" class="icon icon-mail"></nuxt-link>
          </div>
          <span v-if="navToggle" class="text-nav text-grey-400">Contact</span>
        </div>
        <hr class="divider">
        <div class="nav-items" v-for="(item, i) in navItems" :key="i">
          <div class="nav-item">
            <nuxt-link
              :to="`/products/${item.name[0]}/view`"
              :aria-label="`Links to the ${item.name[0]} product page.`"
              class="text-white no-underline flex items-center"
            >
              <component
                :is="item.svg"
                class="text-white fill-current w-60px"
                :class="navItemClass(item)"
              />
              <span v-if="navToggle" class="text-nav">{{ item.name[3] }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div>
        <div class="nav-logo flex justify-center">
          <nuxt-link
            to="/"
            class="icon"
            :class="[ navToggle ? 'icon-k-full' : 'icon-k' ]"
            aria-label="Links to the home page"
          ></nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import DogSymbol from '@/components/symbols/dog'
import CatSymbol from '@/components/symbols/cat'
import FishSymbol from '@/components/symbols/fish'
import BirdSymbol from '@/components/symbols/bird'
import HamsterSymbol from '@/components/symbols/hamster'

export default {
  name: 'TheNavBar',
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
          name: ['fish', 'Fish', 'fishes', 'Fishes'],
          icon: 'icon-fish-small',
          svg: FishSymbol,
        },
        {
          color: 'green-light',
          name: ['birds', 'Bird', 'bird', 'Birds'],
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
      navToggle: true,
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

