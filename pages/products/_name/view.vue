<template>
  <div>
    <header class="relative flex justify-center w-full">
      <i class="mt-13 absolute z-10 icon-k-large"/>
      <HomeSlider :images="homeSliderImages"/>
    </header>
    <main class="container px-4 lg:px-0 mx-auto text-white">
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

      <!-- Title -->
      <h1 class="title uppercase mb-5">{{ category.shortName }} Articles</h1>
      <!-- Filter -->
      <section class="mb-10px pb-5 border-b-2 border-solid border-grey-650">
        <!-- Filter toggle -->
        <div class="flex hover:cursor-pointer mb-12 sm:mb-4" @click="toggleFilter = !toggleFilter">
          <div class="text-15px mr-10px">Advanced filter</div>
          <div
            :class="[ (toggleFilter) ? 'dropdown-triangle-bot' : 'dropdown-triangle-right']"
            class="self-center dropdown-triangle dropdown-small dropdown-grey-300"
          ></div>
        </div>
        <div class="md:ml-16" v-if="toggleFilter">
          <!-- Collection Checkbox -->
          <span class="sub-title">By collection</span>
          <div class="flex flex-wrap mt-3 mb-26px">
            <div v-for="collection in collections" :key="collection.id" class="mb-5 mr-5 flex">
              <input
                type="checkbox"
                :name="collection.name"
                :id="collection.name"
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
            <div class="relative">
              <span class="input-price-tag">€</span>
              <input type="text" v-model="minPrice" class="input-text text-center">
            </div>
            <span class="px-5 self-center">-</span>
            <div class="relative">
              <span class="input-price-tag">€</span>
              <input type="text" v-model="maxPrice" class="input-text text-center">
            </div>
          </div>
        </div>
      </section>

      <!-- Sort -->
      <div class="flex justify-between mt-10px mb-5">
        <SelectBox :options="sortOptions" v-model="sort" placeholder="Sort by relevance"/>
      </div>

      <!-- Articles -->
      <section v-if="hotItems && viewport === 'lg'" class="hidden lg:flex mt-16 justify-between">
        <div class="w-1/2">
          <HotProducts
            :items="$store.getters.getAmountOfItems(dogArticles, itemsToShow === 0 ? dogArticles.length : 4)"
            :category="category"
            :itemsToShow="3"
            class="justify-center"
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
        :items="sortedArticles"
        :category="category"
        :itemsToShow="itemsToShow"
        class="justify-center"
      />

      <!-- Load more placeholder -->
      <section
        v-if="this.enableSroll"
        class="flex -mx-3px relative justify-center"
        ref="placeholder"
      >
        <Card md class="px-3px" v-for="i in placeholderItems" :key="i"></Card>
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
import SelectBox from '@/components/SelectBox'

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
    SelectBox,
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
      minPrice: '8,00',
      maxPrice: '499,00',
      itemsToShow: 3,
      articles: [],
      sort: {},
      sortOptions: [
        {
          id: 1,
          name: 'Price: low to high',
          value: 'priceLow',
        },
        {
          id: 2,
          name: 'Price: high to low',
          value: 'priceHigh',
        },
        {
          id: 3,
          name: 'Latest',
          value: 'latest',
        },
        {
          id: 4,
          name: 'Oldest',
          value: 'oldest',
        },
      ],
      viewport: 'sm',
      placeholderItems: 1,
    }
  },
  mounted() {
    // Detects if user scrolled to the bottom
    window.addEventListener('scroll', this.scrollListener)

    // Detects if its not a mobile screen
    if (window.innerWidth > 576) {
      this.viewport = 'md'
      this.placeholderItems = 2
      if (window.innerWidth > 768) {
        this.viewport = 'md'
        this.placeholderItems = 3
        if (window.innerWidth > 960) {
          this.viewport = 'lg'
          this.placeholderItems = 4
          this.itemsToShow = 0
        }
      }
    }
    // Load 3 items in Highlight if Desktop
    if (this.viewport === 'lg') {
      this.articles = this.$store.getters.getAmountOfItems(this.dogArticles, this.dogArticles.length - 3)
    } else {
      this.articles = this.dogArticles
    }
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
    },
    sortedArticles() {
      const minPrice = parseFloat(this.minPrice) > 0 ? parseFloat(this.minPrice) : 0;
      const maxPrice = parseFloat(this.maxPrice) > 0 ? parseFloat(this.maxPrice) : 499;

      const articles = this.articles.filter(article => {
        return (parseFloat(article.price) > minPrice && parseFloat(article.price) < maxPrice)
      })

      switch (this.sort.value) {
          case 'priceLow':
            return articles.sort((a, b) => {
                return parseFloat(a.price) - parseFloat(b.price);
              })
          case 'priceHigh':
            return articles.sort((a, b) => {
                return parseFloat(b.price) - parseFloat(a.price);
              })
          case 'latest':
            return articles.sort((a, b) => {
                const aDate = new Date(a.dateAdded)
                const bDate = new Date(b.dateAdded)
                return bDate.getTime() - aDate.getTime();
              })
          case 'oldest':
            return articles.sort((a, b) => {
                const aDate = new Date(a.dateAdded)
                const bDate = new Date(b.dateAdded)
                return aDate.getTime() - bDate.getTime();
              })
          default: 
            return articles
        }
    },
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