<template>
  <div>
    <div class="relative">
      <span class="input-price-tag">€</span>
      <input
        type="text"
        :value="minPrice"
        @change="$emit('update:minPrice')"
        class="input-text input-xs text-center"
      >
    </div>
    <span class="px-5 self-center">-</span>
    <div class="relative">
      <span class="input-price-tag">€</span>
      <input
        type="text"
        :value="maxPrice"
        @change="$emit('update:maxPrice')"
        class="input-text input-xs text-center"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFormInputRange',
  props: {
      minPrice: Number,
      maxPrice: Number,
  },
}
</script>
