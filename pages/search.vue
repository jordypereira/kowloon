<template>
  <Overlay @closeOverlay="$store.commit('closeSearch')">
    <div class="container text-grey-750 mt-search">
      <!-- Filter toggle -->
      <ProductAdvancedFilter
        :itemsCheckbox="categories"
        :itemsChecked.sync="categoriesChecked"
        color="other"
        :toggleFilter.sync="toggleFilter"
        :price.sync="price"
        filterTitleClasses="text-search-filter"
      >
        <span slot="checkboxesTitle" class="text-xl text-black-dark2">Category</span>
        <span slot="priceTitle" class="text-xl text-black-dark2">Price range</span>
      </ProductAdvancedFilter>

      <!-- Input -->
      <SearchInput
        v-model="searchQuery"
        :placeholder="searchPlaceholder"
        inputFieldClasses="input-text-search text-orange"
        aria-label="Search all the products."
        class="relative"
      >
        <!-- Enter button -->
        <i
          v-if="!this.$store.getters.isMobile && !searchQuery"
          class="absolute icon icon-break m-search-icon-break"
          slot="input"
        ></i>
        <!-- Help text -->
        <p
          v-if="!searchQuery && !this.$store.getters.isMobile"
          slot="clear"
        >Don’t find what you’re looking for? Maybe use fewer words or a more general search term.
          <br>if you still have no luck you can contact our
          <nuxt-link
            to="/about"
            class="text-grey-750"
            @click.native="$store.commit('closeSearch')"
          >customer service</nuxt-link>.
        </p>
        <!-- Amount of results text -->
        <p
          v-if="searchQuery"
          slot="clear"
        >{{ `${queriedItems.length} results for the word "${ searchQuery }"` }}</p>
      </SearchInput>

      <!-- Help text -->
      <p
        v-if="!searchQuery && this.$store.getters.isMobile"
        class="mt-20"
      >Don’t find what you’re looking for? Maybe use fewer words or a more general search term.
        <br>if you still have no luck you can contact our
        <nuxt-link to="/about" class="text-grey-750">customer service</nuxt-link>.
      </p>

      <!-- FAQ ANSWERS -->
      <div v-if="searchQuery" class="mt-8 md:mt-42px">
        <FaqComponentItem
          v-for="item in queriedItems"
          :key="item.id"
          v-bind="item"
          :dropdownTriangle="false"
          :clickable="false"
          toggled
          inverse
          shadow
        />
      </div>
      <!-- Help text -->
      <p
        class="mt-5"
        v-if="searchQuery"
      >Try checking spelling or tweaking it. Maybe use fewer words or a more general search term.
        <br>if you still have no luck you can contact our
        <nuxt-link to="/about" class="text-grey-750">customer service</nuxt-link>.
      </p>
    </div>
  </Overlay>
</template>

<script>
import Overlay from '@/layouts/overlay'

import FaqComponentItem from '@/components/faq/FaqComponentItem'
import SearchInput from '@/components/forms/SearchInput'
import ProductAdvancedFilter from '@/components/product/ProductAdvancedFilter'

import faqItems from '@/services/faqItems'

export default {
  name: 'SearchPage',
  components: {
      Overlay,
      FaqComponentItem,
      SearchInput,
      ProductAdvancedFilter,
  },
  data() {
    return {
      searchQuery: '',
      faqItems,
      itemsToShow: 6,
      toggleFilter: false,
      price: [8, 499],
      categoriesChecked: [],
      categories: [
        {
          id: 1,
          name: 'Dogs',
          value: 'dog'
        },
        {
          id: 2,
          name: 'Cats',
          value: 'cat'
        },
        {
          id: 3,
          name: 'Fish',
          value: 'fish'
        },
        {
          id: 4,
          name: 'Birds',
          value: 'bird'
        },
        {
          id: 5,
          name: 'Other',
          value: 'other'
        },
      ]
    }
  },
  computed: {
    queriedItems() {
      return this.faqItems.filter(item => {
        return item.description.toLowerCase().includes(this.searchQuery.toLowerCase()) || item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    },
    searchPlaceholder() {
      return this.$store.getters.isMobile ? 'Type to search' : 'Just start typing and hit      to search'
    }
  },
}
</script>
