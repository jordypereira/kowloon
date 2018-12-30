<template>
  <div class="flex -mx-6px">
    <div v-for="item in getAmountOfItems(itemsToShow)" :key="item.id" class="px-6px">
      <HotProduct :item="item">
        <ProductColors class="absolute pin-t pin-l m-10px" :colors="item.colors"/>
      </HotProduct>
    </div>

    <div>
      <HotProduct :item="getRestOfItems(itemsToShow)[0]">
        <div
          class="absolute pin-t pin-l m-10px btn-rounded bg-white text-grey-900 font-bold"
        >{{ items.length - itemsToShow }}</div>
      </HotProduct>
    </div>
  </div>
</template>

<script>
import HotProduct from '@/components/product/HotProduct'
import ProductColors from '@/components/product/ProductColors'

export default {
  name: 'HotProducts',
  props: {
      items: Array,
  },
  components: {
      HotProduct,
      ProductColors,
  },
  data() {
    return {
      itemsToShow: 3,
    }
  },
  methods: {
    getAmountOfItems(amount) {
      return this.items.slice(0, amount)
    },
    getRestOfItems(amount) {
      return this.items.filter(item => item.id === amount+1)
    },
  },
}
</script>