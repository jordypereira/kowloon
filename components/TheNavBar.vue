<template>
  <div class="relative">
    <nav class="absolute md:static md:bg-black md:h-full" :class="{'nav-open h-full': navToggle}">
      <div class="md:h-screen flex flex-col justify-between" :class="{'h-screen': navToggle}">
        <div class="flex flex-col">
          <!-- Nav Toggler -->
          <div class="relative z-10" @click="toggleNav()">
            <div class="nav-toggle" :class="[navToggle ? 'hidden md:flex' : 'flex']">
              <i
                class="icon icon-hamburger hover:cursor-pointer"
                aria-label="Toggle the navigation pane."
              ></i>
            </div>
            <i v-if="navToggle" class="block md:hidden icon icon-x-close nav-toggle-x"/>
          </div>
          <!-- Icon Search -->
          <div class="items-center nav-search" :class="[!navToggle ? 'hidden md:flex' : 'flex']">
            <div class="w-60px flex justify-center">
              <i class="icon icon-search"></i>
            </div>
            <span v-if="navToggle" class="text-nav text-grey-400">Search</span>
          </div>
          <!-- Icon FAQ -->
          <div
            class="items-center nav-faq hover:cursor-pointer"
            :class="[!navToggle ? 'hidden md:flex' : 'flex', $store.state.faqToggle ? 'bg-grey-75' : '']"
            @click="$store.commit('toggleFaq')"
          >
            <div class="w-60px flex justify-center">
              <i class="icon icon-faq" :class="[$store.state.faqToggle ? 'bg-black' : '']"></i>
            </div>
            <span v-if="navToggle" class="text-nav text-grey-400">FAQ</span>
          </div>
          <!-- Icon Contact -->
          <hr class="divider" :class="[!navToggle ? 'hidden md:block' : 'block']">
          <nuxt-link
            to="/about"
            class="items-center no-underline"
            :class="[!navToggle ? 'hidden md:flex' : 'flex']"
          >
            <div class="w-60px flex justify-center">
              <i class="icon icon-mail"></i>
            </div>
            <span v-if="navToggle" class="text-nav text-grey-400">Contact</span>
          </nuxt-link>
          <hr class="divider" :class="[!navToggle ? 'hidden md:block' : 'block']">
          <!-- Icons Categories -->
          <div
            class="nav-items"
            v-for="(item, i) in navItems"
            :key="i"
            :class="[!navToggle ? 'hidden md:block' : 'block']"
          >
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
        <!-- Icon Logo -->
        <div class="nav-logo pl-4" :class="[!navToggle ? 'hidden md:flex' : 'flex']">
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
import { mapMutations } from 'vuex'

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
    }
  },
  computed: {
    navToggle() {
      return this.$store.state.navToggle
    }
  },
  methods: {
    navItemClass(item) {
      if(item.name.includes(this.$route.params.name)) {
        return `hover:text-${item.color} text-${item.color} ${item.icon}`
      } else {
        return `hover:text-${item.color} ${item.icon}`
      }
    },
    ...mapMutations([
      'toggleNav',
    ]),
  },
}
</script>

