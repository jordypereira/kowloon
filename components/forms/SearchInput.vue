<template>
  <div>
    <div class="flex border-b border-grey-750 mt-6 md:mt-12">
      <slot name="input"/>
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
      class="flex items-start mt-4 mb-6"
      :class="[$slots.clear ? 'justify-between' : 'justify-end']"
    >
      <slot name="clear"/>
      <button
        class="flex items-center hover:cursor-pointer select-none"
        @click="$emit('input', '')"
        aria-labelledby="Clears the entered query text."
      >
        <i class="icon icon-clear bg-grey-750 mr-6px"></i>
        Clear
      </button>
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