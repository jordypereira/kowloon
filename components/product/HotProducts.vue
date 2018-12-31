<template>
  <div class="flex -mx-3px">
    <div v-for="item in getAmountOfItems(itemsToShow)" :key="item.id" class="px-3px">
      <Card v-bind="item" class="hot-product" hoverFrame="details" md>
        <ProductColors class="absolute pin-t pin-l m-10px" :colors="item.colors"/>
      </Card>
    </div>

    <div v-if="(items.length > itemsToShow + 1)" class="px-3px">
      <Card v-bind="getRestOfItems(itemsToShow)[0]" md stacked>
        <div
          class="absolute pin-t pin-l m-10px btn-rounded bg-white text-grey-900 font-bold"
        >{{ items.length - itemsToShow }}</div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/Card'
import ProductColors from '@/components/product/ProductColors'

export default {
  name: 'ProductThumbnails',
  props: {
      items: Array,
  },
  components: {
      Card,
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