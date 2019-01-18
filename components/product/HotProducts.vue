<template>
  <div class="flex flex-wrap -mx-3px">
    <!-- Normal wrapping cards  -->
    <div
      v-for="item in $store.getters.getAmountOfItems(items, itemsToShow)"
      :key="item.id"
      class="px-3px mb-5"
    >
      <Card
        v-bind="item"
        :category="category"
        :url="`/products/${category.name}/details`"
        class="hot-product"
        hoverFrame="details"
        md
      >
        <ProductColors class="absolute pin-t pin-l m-10px" :colors="item.colors"/>
      </Card>
    </div>

    <!-- Rest of the cards stacked  -->
    <div v-if="(items.length > itemsToShow + 1 && itemsToShow !== 0)" class="px-3px mb-5">
      <Card
        v-bind="items[itemsToShow]"
        :url="`/products/${category.name}/details`"
        :category="category"
        hoverFrame="View more"
        md
        stacked
      >
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
  name: 'HotProducts',
  props: {
      items: Array,
      itemsToShow: {
        type: Number,
        default: 3,
      },
      category: {
        type: Object,
        default: function () {
          return {
            name: 'dog',
            color: 'pink'
          }
        }
      },
  },
  components: {
      Card,
      ProductColors,
  },
}
</script>