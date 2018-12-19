<template>
  <div class="mb-10px">
    <div class="product__info__tags flex mb-5">
      <img src="@/assets/images/k_logo.svg" alt="Kowloong Logo Small" class="mr-6px">
      <div class="tag">
        <div class="tag-color bg-pink"></div>
        <div class="product__info__tags__tag__label">Dogs</div>
      </div>
      <div class="product__info__tags__tag tag">Splash 'n Fun</div>
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
export default {
  props: {
    productColors: Array,
  },
};
</script>