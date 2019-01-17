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
      <section class="mb-10px pb-5 border-b-2 border-solid border-grey-650">
        <h1 class="title uppercase mb-5">{{ category.shortName }} Articles</h1>
        <div class="flex hover:cursor-pointer" @click="toggleFilter = !toggleFilter">
          <div class="text-15px mr-10px">Filter</div>
          <div
            :class="[ (toggleFilter) ? 'dropdown-triangle-bot' : 'dropdown-triangle-right']"
            class="self-center dropdown-triangle dropdown-small dropdown-grey-300"
          ></div>
        </div>
        <div class="ml-16" v-if="toggleFilter">
          <!-- Collection Checkbox -->
          <span class="sub-title">By collection</span>
          <div class="flex flex-wrap mt-3 mb-26px">
            <div v-for="collection in collections" :key="collection.id" class="mr-5 flex">
              <input
                type="checkbox"
                :name="collection.name"
                :v-model="collection.checked"
                class="input input-checkbox mr-10px"
                :class="`checked-${category.color}`"
              >
              <label :for="collection.name">{{ collection.name }}</label>
            </div>
          </div>

          <!-- Price Slider -->
          <span class="sub-title">Price range</span>
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
            :items="$store.getters.getAmountOfItems(dogArticles, itemsToShow === 0 ? dogArticles.length : 4)"
            :category="category"
            :itemsToShow="3"
          />
        </div>
        <!-- Highlighted Article -->
        <div class="w-1/2 pl-6px">
          <Card
            :img="dogCoolingMatLarge"
            :name="highlightedProduct.name"
            :description="highlightedProduct.description"
            :price="highlightedProduct.price"
            imgAlt="Dog cooling mat"
            :url="`/products/${category.name}/details`"
            :category="category"
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

      <!-- Extra cards loaded  -->
      <HotProducts
        :items="$store.getters.getAmountOfItems(dogArticles, dogArticles.length - 3)"
        :category="category"
        :itemsToShow="itemsToShow"
      />

      <!-- Load more placeholder -->
      <section
        v-if="this.enableSroll"
        class="flex -mx-3px relative justify-center"
        ref="placeholder"
      >
        <Card md class="px-3px" v-for="i in 4" :key="i"></Card>
        <i class="icon icon-loader absolute self-center"></i>
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
import dogCoolingMatLarge from '@/assets/images/products/dog_cooling_mat.jpg'

import homeSliderImages from '@/services/homeSliderImages'
import collections from '@/services/productOptions'
import hotItems from '@/services/hotItems'
import dogArticles from '@/services/dogArticles'

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
      dogCoolingMatLarge,
      hotItems,
      dogArticles,
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
      highlightedProduct: {
        name: 'Cooling mat',
        description: 'Hier komt een deel van de beschrijvende tekst die bij elk product hoort. Ook terug te vinden in het product detail.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius..',
        price: '15,49',
      },
      toggleFilter: true,
      minPrice: 8,
      maxPrice: 499,
      itemsToShow: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  computed: {
    category() {
      return this.$store.getters.getCategory(this.$route.params.name)
    },
    enableSroll() {
      return this.dogArticles.length - 3 > this.itemsToShow
    }
  },
  methods: {
    scrollListener(){
      if(this.enableSroll) {
        if (this.$refs.placeholder.getBoundingClientRect().bottom < window.innerHeight + 1) {
          this.itemsToShow === 0 ? this.itemsToShow += 3 : this.itemsToShow += 4
        }
      } else {
         window.removeEventListener('scroll', this.scrollListener)
      }
    }
  },
}
</script>