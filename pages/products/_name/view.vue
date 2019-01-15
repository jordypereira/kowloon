<template>
  <div>
    <header class="relative flex justify-center w-full">
      <i class="mt-13 absolute z-10 icon-k-large"/>
      <HomeSlider :images="homeSliderImages"/>
    </header>
    <main class="container mx-auto text-white">
      <!-- Tags -->
      <div class="flex mt-8 mb-5">
        <i class="mr-6px icon icon-k"/>
        <div class="flex -mx-1">
          <Tag
            v-for="tag in tags"
            :key="tag.id"
            :tagName="tag.name"
            :tagColor="tag.color"
            class="px-1"
          />
        </div>
      </div>

      <!-- Filter -->
      <section>
        <h1
          class="title uppercase"
        >{{ this.getCategory(this.$route.params.name).shortName }} Articles</h1>
      </section>
    </main>
  </div>
</template>

<script>
import HomeSlider from '@/components/HomeSlider'
import Tag from '@/components/Tag'

import homeSliderImages from '@/services/homeSliderImages'

export default {
  name: 'ProductView',
  components: {
    HomeSlider,
    Tag,
  },
  data() {
    return {
      tags: [
        {
          id: 1,
          ...this.getCategory(this.$route.params.name)
        },
        {
          id: 2,
          name: 'Splash \'n Fun',
        },
      ],
      homeSliderImages,
    }
  },
  methods: {
    getCategory(name) {
      switch (name) {
        case 'dog':
        case 'Dog':
        case 'dogs':
        case 'Dogs':
          return {
            name: 'Dogs',
            shortName: 'Dog',
            color: 'pink',
          }
          break;
        case 'cat':
        case 'Cat':
        case 'cats':
        case 'Cats':
          return {
            name: 'Cats',
            shortName: 'Cat',
            color: 'indigo',
          }
          break;
        case 'fish':
        case 'Fish':
          return {
            name: 'Fishes',
            shortName: 'Fish',
            color: 'yellow',
          }
          break;
        case 'bird':
        case 'Bird':
        case 'birds':
        case 'Birds':
          return {
            name: 'Birds',
            shortName: 'Bird',
            color: 'green-light',
          }
          break;
        case 'small-animals':
        case 'small animals':
        case 'Small-Animals':
        case 'Small Animals':
          return {
            name: 'Small Animals',
            shortName: 'Small Animal',
            color: 'blue-light',
          }
          break;
      
        default: 
          return {
            name: 'Other',
            color: 'beige',
          }
          break;
      }
    }
  },
}
</script>