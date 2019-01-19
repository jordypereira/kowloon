<template>
  <div>
    <!-- Slider -->
    <header class="relative flex justify-center max-w-full">
      <i class="mt-13 absolute z-10 icon icon-kowloon"></i>
      <HomeSlider :images="homeSliderImages"/>
    </header>

    <main class="container lg:px-0 text-white">
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
        <ProductAdvancedFilter
          :itemsCheckbox="collections"
          :itemsChecked.sync="collectionsChecked"
          :color="category.color"
          :toggleFilter.sync="toggleFilter"
          :price.sync="price"
        >
          <span slot="checkboxesTitle" class="sub-title">By collection</span>
          <span slot="priceTitle" class="sub-title">Price range</span>
        </ProductAdvancedFilter>
      </section>

      <!-- Sort -->
      <div class="flex justify-between mt-10px mb-5">
        <SelectBox :options="sortOptions" v-model="sort" placeholder="Sort by relevance"/>
        <!-- Shown Items Counter -->
        <div v-if="viewport === 'md' || viewport === 'lg'" class="whitespace-no-wrap">
          <span class="text-grey-200">{{ category.shortName }} items:</span>
          <span class="font-bold">{{ itemsToShow + 1 }} of {{ dogArticles.length }}</span>
        </div>
      </div>

      <!-- Articles -->
      <section
        v-if="viewport === 'lg' && sortedArticles.length"
        class="hidden lg:flex mt-16 justify-between"
      >
        <!-- The 4 Articles after the first  -->
        <div class="w-1/2">
          <HotProducts
            :items="$store.getters.getAmountOfItems(sortedArticles, itemsToShow === 5 ? sortedArticles.length : 5, 1)"
            :category="category"
            :itemsToShow="3"
            class="justify-center"
          />
        </div>
        <!-- Highlight the first Article -->
        <div class="w-1/2 pl-6px">
          <Card
            :img="sortedArticles[0].imgFull"
            :name="sortedArticles[0].name"
            :description="sortedArticles[0].description"
            :price="sortedArticles[0].price"
            :imgAlt="sortedArticles[0].imgAlt"
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
        v-if="extraCards.length"
        :items="extraCards"
        :category="category"
        :itemsToShow="extraCardsToShow"
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
import ProductAdvancedFilter from '@/components/product/ProductAdvancedFilter'

import dogCoolingMat from '@/assets/images/products/dog_cooling_mat--thumbnail.png'
import dogCoolingMatLarge from '@/assets/images/products/dog_cooling_mat.jpg'

import homeSliderImages from '@/services/homeSliderImages'
import collections from '@/services/productOptions'
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
    ProductAdvancedFilter,
  },
  data() {
    return {
      homeSliderImages,
      collections,
      dogCoolingMat,
      dogCoolingMatLarge,
      dogArticles,
      collectionsChecked: [],
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
      toggleFilter: false,
      price: [8, 499],
      itemsToShow: 3,
      itemsToAddPerScroll: 3,
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
  computed: {
    category() {
      return this.$store.getters.getCategory(this.$route.params.name)
    },
    enableSroll() {
      return (this.extraCards.length - this.itemsToAddPerScroll) > this.itemsToShow
    },
    sortedArticles() {
      const minPrice = parseFloat(this.price[0]) > 0 ? parseFloat(this.price[0]) : 0;
      const maxPrice = parseFloat(this.price[1]) > 0 ? parseFloat(this.price[1]) : 499;

      const articles = this.dogArticles.filter(article => {
        // Checks if the article tag is in the checked tags
        if (this.collectionsChecked.length) {
          if (!article.tags || !this.collectionsChecked.some(checkedTag => article.tags.includes(checkedTag))) {
            return false
          }
        }
        // Checks if the article is between the price
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
    extraCards() {
      if (this.viewport === 'lg' && this.dogArticles) {
        return this.$store.getters.getAmountOfItems(this.sortedArticles, this.dogArticles.length, 4)
      } else {
        return this.sortedArticles
      }
    },
    extraCardsToShow() {
      if (this.viewport === 'lg') {
        return this.itemsToShow - 5
      } else {
        return this.itemsToShow
      }
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
          this.itemsToShow = 5
        }
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener(){
      // if the amount of items left is less than the amount that gets added, show all of the items
      if(this.enableSroll) {
        // If the bottom of the placeholder is less than the total window height, add more items to show
        if (this.$refs.placeholder.getBoundingClientRect().bottom < window.innerHeight + 1) {
          if (this.itemsToShow === 5) {
            this.itemsToShow += this.itemsToAddPerScroll
          } else {
            this.itemsToShow += (this.itemsToAddPerScroll + 1)
          }
        }
      } else {
        this.itemsToShow = this.dogArticles.length - 1
        window.removeEventListener('scroll', this.scrollListener)
      }
    }
  },
}
</script>