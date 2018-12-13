<template>
  <div class="product__info">
    <div class="product__info__tags">
      <span>K</span>
      <div class="product__info__tags__tag">
        <div class="product__info__tags__tag__color bg--pink"></div>
        <div class="product__info__tags__tag__label">Dogs</div>
      </div>
      <div class="product__info__tags__tag">Splash 'n Fun</div>
    </div>
    <div class="product__info__title">
      <h2>Cooling Mat</h2>
    </div>
    <div class="product__info__price">
      <p>€ 15,49</p>
    </div>
    <div class="product__info__colors__label">Colors</div>
    <div class="product__info__colors">
      <div
        v-for="(color, i) in productColors"
        :key="i"
        class="product__info__colors__color"
        :class="`bg--${color}`"
      ></div>
    </div>
    <div class="product__info__description__label">Description</div>
    <div
      class="product__info__description__text"
    >Hier komt een de volledige beschrijvende tekst met een max. aantal karakters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea clit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat consectetur.</div>
  </div>
</template>

<script>
export default {
  props: {
    productColors: Array,
  },
};
</script>

<style lang="scss">
.product__info__tags {
  display: flex;
  .product__info__tags__tag {
    background-color: $black;
    display: flex;
    align-items: center;
    .product__info__tags__tag__color {
      width: $tag-size;
      height: $tag-size;
      border-radius: 100%;
      margin-right: 6px;
    }
  }
}
.product__info__colors {
  display: flex;
}
.product__info__colors__color {
  background-color: #000;
  width: $color-size;
  height: $color-size;
  border-radius: 100%;
  border: 1px solid #fff;
}
</style>
