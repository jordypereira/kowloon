<template>
  <div>
    <header class="relative flex justify-center w-full">
      <i class="mt-13 absolute z-10 icon-k-large"/>
      <!-- <HomeSlider :images="homeSliderImages"/> -->
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
      <section class="mb-10px pb-5 border-solid border-grey-650">
        <h1
          class="title uppercase mb-5"
        >{{ this.$store.getters.getCategory(this.$route.params.name).shortName }} Articles</h1>
        <div class="flex hover:cursor-pointer" @click="toggleFilter = !toggleFilter">
          <div class="text-15px mr-10px">Filter</div>
          <div
            :class="[ (toggleFilter) ? 'dropdown-triangle-bot' : 'dropdown-triangle-right']"
            class="self-center dropdown-triangle dropdown-small dropdown-grey-300"
          ></div>
        </div>
        <div class="ml-16" v-if="toggleFilter">
          <!-- Collection Checkbox -->
          <p>By collection</p>
          <div class="flex flex-wrap mt-3 mb-26px">
            <div v-for="collection in collections" :key="collection.id" class="mr-5 flex">
              <input
                type="checkbox"
                :name="collection.name"
                :v-model="collection.checked"
                class="input input-checkbox mr-10px"
              >
              <label :for="collection.name">{{ collection.name }}</label>
            </div>
          </div>

          <!-- Price Slider -->
          <p>Price range</p>
          <div class="flex mt-3">
            <input type="text" v-model="minPrice" class="input-text">
            <span class="px-5 self-center">-</span>
            <input type="text" v-model="maxPrice" class="input-text">
          </div>
        </div>
      </section>

      <!-- Articles -->
      <section v-if="hotItems" class="mt-16 flex justify-between">
        <div class="w-1/2">
          <HotProducts
            :items="hotItems"
            :categoryColor="this.$store.getters.getCategory(this.$route.params.name).color"
          />
        </div>
        <div class="w-1/2">
          <Card
            :img="dogCoolingMat"
            imgAlt="Dog cooling mat"
            :categoryColor="this.$store.getters.getCategory(this.$route.params.name).color"
            hoverFrame="details"
            lg
          >
            <ProductColors
              class="absolute pin-t pin-l m-10px"
              :colors="['white', 'black', 'blue']"
            />
          </Card>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HomeSlider from '@/components/HomeSlider'
import Tag from '@/components/Tag'
import HotProducts from '@/components/product/HotProducts'
import Card from '@/components/cards/Card'
import ProductColors from '@/components/product/ProductColors'

import dogCoolingMat from '@/assets/images/products/dog_cooling_mat--thumbnail.png'

import homeSliderImages from '@/services/homeSliderImages'
import collections from '@/services/productOptions'
import hotItems from '@/services/hotItems'

export default {
  name: 'ProductView',
  components: {
    HomeSlider,
    Tag,
    HotProducts,
    Card,
    ProductColors,
  },
  data() {
    return {
      homeSliderImages,
      collections,
      dogCoolingMat,
      hotItems,
      tags: [
        {
          id: 1,
          ...this.$store.getters.getCategory(this.$route.params.name)
        },
        {
          id: 2,
          name: 'Splash \'n Fun',
        },
      ],
      toggleFilter: true,
      minPrice: 8,
      maxPrice: 499,
    }
  },
}
</script>