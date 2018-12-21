<template>
  <div class="mb-10px">
    <div class="flex mb-5 -mx-6px">
      <img src="@/assets/images/k_logo.svg" alt="Kowloong Logo Small" class="px-6px">
      <Tag
        v-for="tag in tags"
        :key="tag.id"
        :tagName="tag.name"
        :tagColor="tag.color"
        class="px-6px"
      />
    </div>
    <h2 class="title mt-5 mb-18px">COOLING MAT</h2>
    <p class="price mb-5 mt-18px">€ 15,49</p>
    <div class="mt-20px mb-14px sub-title">Colors</div>
    <div class="flex mt-5 mb-14px">
      <div
        v-for="(color, i) in productColors"
        :key="i"
        class="product-color"
        :class="`bg-${color}`"
      ></div>
    </div>
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

export default {
  props: {
    productColors: Array,
  },
  components: {
    Tag,
  },
  data() {
    return {
      tags: [
        {
          id: 1,
          name: 'Dogs',
          color: 'pink'
        },
        {
          id: 2,
          name: 'Splash \'n Fun',
        },
      ],
    }
  },
};
</script>