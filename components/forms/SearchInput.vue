<template>
  <div>
    <div class="flex border-b border-grey-750 mt-6 md:mt-12">
      <label for="searchQuery">
        <SearchIcon :strokeWidth="2"/>
      </label>
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        id="searchQuery"
        type="text"
        :placeholder="placeholder"
        class="flex-grow focus:outline-none"
        :class="inputFieldClasses"
        :aria-label="ariaLabel"
      >
    </div>
    <!-- Clear -->
    <div
      class="flex justify-end items-center mt-4 mb-6 hover:cursor-pointer"
      @click="$emit('input', '')"
    >
      <i class="icon icon-clear bg-grey-750 mr-6px"></i>
      Clear
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/components/symbols/search'

export default {
  name: 'SearchInput',
  props: {
      value: String,
      inputFieldClasses: {
        type: [Array, String],
        default: '',
      },
      placeholder: String,
      ariaLabel: String,
  },
  components: {
      SearchIcon,
  },
}
</script>