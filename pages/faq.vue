<template>
  <Overlay @closeOverlay="$store.commit('closeFaq')">
    <div class="container mt-faq text-grey-750">
      <!-- Title -->
      <h1 class="title text-orange uppercase hidden md:block">Frequently asked questions</h1>
      <h1 class="title text-orange uppercase md:hidden" style="font-size: 40px;">Faq</h1>
      <!-- Input -->
      <SearchInput
        v-model="searchQuery"
        placeholder="Search on keyword"
        inputFieldClasses="input-text-faq"
        aria-label="Query the FAQ questions."
      />
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
  </Overlay>
</template>

<script>
import Overlay from '@/layouts/overlay'

import FaqComponentItem from '@/components/faq/FaqComponentItem'
import SearchInput from '@/components/forms/SearchInput'

import faqItems from '@/services/faqItems'

export default {
  name: 'FAQPage',
  components: {
      Overlay,
      FaqComponentItem,
      SearchInput,
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
