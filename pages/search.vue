<template>
  <Overlay @closeOverlay="$store.commit('closeSearch')">
    <div class="container text-grey-750">
      <!-- Input -->
      <SearchInput
        v-model="searchQuery"
        :placeholder="searchPlaceholder"
        inputFieldClasses="input-text-search text-orange"
        aria-label="Search all the products."
        class="mt-search"
      >
        <!-- Help text -->
        <p
          v-if="!searchQuery"
          slot="clear"
        >Don’t find what you’re looking for? Maybe use fewer words or a more general search term.
          <br>if you still have no luck you can contact our
          <nuxt-link to="/about" class="text-grey-750">customer service</nuxt-link>.
        </p>
        <!-- Amount of results text -->
        <p
          v-if="searchQuery"
          slot="clear"
        >{{ `${queriedItems.length} results for the word "${ searchQuery }"` }}</p>
      </SearchInput>

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

import faqItems from '@/services/faqItems'

export default {
  name: 'SearchPage',
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
    },
    searchPlaceholder() {
      return this.$store.getters.isMobile ? 'Type to search' : 'Just start typing and hit       to search'
    }
  },
}
</script>
