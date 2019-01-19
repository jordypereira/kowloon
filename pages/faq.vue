<template>
  <div class="absolute z-30 bg-white h-full opacity-95 pin-t pin-r pin-l md:pin-l-60px">
    <!-- Close Icon -->
    <div
      class="absolute flex flex-col pin-r pin-t m-4 md:m-5 hover:cursor-pointer"
      @click="$store.commit('closeFaq')"
    >
      <i class="icon icon-x-close bg-grey-300"></i>
      <span class="text-grey-300">esc</span>
    </div>
    <div class="container mt-faq text-grey-750">
      <!-- Title -->
      <h1 class="title text-orange uppercase hidden md:block">Frequently asked questions</h1>
      <h1 class="title text-orange uppercase md:hidden" style="font-size: 40px;">Faq</h1>
      <!-- Input -->
      <div class="flex border-b border-grey-750 mt-6 md:mt-12">
        <label for="searchQuery">
          <SearchIcon :strokeWidth="2"/>
        </label>
        <input
          v-model="searchQuery"
          id="searchQuery"
          type="text"
          placeholder="Search on keyword"
          class="flex-grow input-text-faq"
          aria-label="Query the FAQ questions."
        >
      </div>
      <!-- Clear -->
      <div
        class="flex justify-end items-center mt-4 mb-6 hover:cursor-pointer"
        @click="searchQuery = ''"
      >
        <i class="icon icon-clear bg-grey-750 mr-6px"></i>
        Clear
      </div>
      <!-- Help text -->
      <p>Don’t find what you’re looking for?
        <br>You can always contact our customer service. We’re happy to help you!
      </p>
      <!-- FAQ ANSWERS -->
      <div class="mt-8 md:mt-42px">
        <FaqComponentItem
          v-for="item in queriedItems.slice(0, itemsToShow)"
          :key="item.id"
          v-bind="item"
          :dropdownTriangle="false"
          :clickable="false"
          toggled
          inverse
          shadow
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/components/symbols/search'
import FaqComponentItem from '@/components/faq/FaqComponentItem'

import faqItems from '@/services/faqItems'

export default {
  name: 'FAQ',
  components: {
      SearchIcon,
      FaqComponentItem,
  },
  data() {
    return {
      searchQuery: '',
      faqItems,
      itemsToShow: 6,
    }
  },
  computed: {
    queriedItems() {
      return this.faqItems.filter(item => {
        return item.description.toLowerCase().includes(this.searchQuery.toLowerCase()) || item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  }
}
</script>
