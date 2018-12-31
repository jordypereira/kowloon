<template>
  <div class="flex -mx-3px">
    <div v-for="item in getAmountOfItems(itemsToShow)" :key="item.id" class="px-3px">
      <ProductThumbnail v-bind="item" class="hot-product" md>
        <ProductColors class="absolute pin-t pin-l m-10px" :colors="item.colors"/>
      </ProductThumbnail>
    </div>

    <div v-if="(items.length > itemsToShow + 1)" class="px-3px">
      <ProductThumbnail v-bind="getRestOfItems(itemsToShow)[0]" class="hot-product">
        <div
          class="absolute pin-t pin-l m-10px btn-rounded bg-white text-grey-900 font-bold"
        >{{ items.length - itemsToShow }}</div>
      </ProductThumbnail>
    </div>
  </div>
</template>

<script>
import ProductThumbnail from '@/components/product/ProductThumbnail'
import ProductColors from '@/components/product/ProductColors'

export default {
  name: 'ProductThumbnails',
  props: {
      items: Array,
  },
  components: {
      ProductThumbnail,
      ProductColors,
  },
  data() {
    return {
      itemsToShow: 3,
    }
  },
  methods: {
    getAmountOfItems(amount) {
      if (this.items.length === amount + 1) {
        return this.items.slice(0, amount + 1)
      }
      return this.items.slice(0, amount)
    },
    getRestOfItems(amount) {
      return this.items.filter(item => item.id === amount+1)
    },
  },
}
</script>