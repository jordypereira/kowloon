<template>
  <div class="mb-10px">
    <div class="flex mb-5">
      <i class="icon icon-k mr-6px"></i>
      <div class="flex -mx-1">
        <Tag
          v-for="tag in tags"
          :key="tag.id"
          :tagName="tag.name"
          :tagColor="tag.color"
          class="px-1"
        />
      </div>
    </div>
    <h1 class="title uppercase mt-5 mb-18px">Cooling mat</h1>
    <p class="price mb-5 mt-18px">€ 15,49</p>

    <div class="mt-20px mb-14px sub-title">Colors</div>
    <ProductColors :colors="productColors" class="mt-5 mb-14px"/>

    <div class="mt-5 mb-11px sub-title">Description</div>
    <div
      class="mt-11px mb-26px"
    >Hier komt een de volledige beschrijvende tekst met een max. aantal karakters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea clit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat consectetur.</div>
    <div class="flex -mx-5px mt-26px">
      <div class="product-shape-square mx-5px"></div>
      <div class="product-shape-circle mx-5px"></div>
      <div class="product-shape-triangle mx-5px"></div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'
import ProductColors from '@/components/product/ProductColors'

export default {
  name: 'ProductInfo',
  props: {
    productColors: Array,
    tags: Array,
  },
  components: {
    Tag,
    ProductColors,
  },
};
</script>