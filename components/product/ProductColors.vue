<template>
  <div class="flex">
    <div v-for="(color, i) in colors" :key="i" class="product-color" :class="`bg-${color}`"></div>
  </div>
</template>

<script>
export default {
  name: 'ProductColors',
  props: {
      colors: Array,
  },
}
</script>