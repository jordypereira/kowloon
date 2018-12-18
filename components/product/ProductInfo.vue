<template>
  <div class="product__info">
    <div class="product__info__tags">
      <span>K</span>
      <div class="product__info__tags__tag tag">
        <div class="product__info__tags__tag__color bg--pink"></div>
        <div class="product__info__tags__tag__label">Dogs</div>
      </div>
      <div class="product__info__tags__tag tag">Splash 'n Fun</div>
    </div>
    <div class="product__info__title">
      <h2 class="title">COOLING MAT</h2>
    </div>
    <div class="product__info__price">
      <p class="price">€ 15,49</p>
    </div>
    <div class="product__info__colors__label sub-title">Colors</div>
    <div class="product__info__colors">
      <div
        v-for="(color, i) in productColors"
        :key="i"
        class="product__info__colors__color"
        :class="`bg--${color}`"
      ></div>
    </div>
    <div class="product__info__description__label sub-title">Description</div>
    <div
      class="product__info__description__text"
    >Hier komt een de volledige beschrijvende tekst met een max. aantal karakters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea clit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat consectetur.</div>
    <div class="product__info__shapes">
      <div class="product__info__shapes--square"></div>
      <div class="product__info__shapes--circle"></div>
      <div class="product__info__shapes--triangle"></div>
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

<style lang="scss">
.product__info {
  margin: 0 0 10px 0px;

  .product__info__tags {
    display: flex;
    margin-bottom: 20px;
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

  .product__info__title {
    margin: 20px 0 18px 0;
  }

  .product__info__price {
    margin: 18px 0 20px 0;
  }

  .product__info__colors__label {
    margin: 20px 0 14px 0;
  }

  .product__info__colors {
    margin: 14px 0 20px 0;
    display: flex;
    .product__info__colors__color {
      width: $color-size;
      height: $color-size;
      border-radius: 100%;
      border: 1px solid #fff;
      margin-right: 5px;
    }
  }

  .product__info__description__label {
    margin: 20px 0 11px 0;
  }

  .product__info__description__text {
    margin: 11px 0 26px 0;
  }

  .product__info__shapes {
    margin: 26px 0 0 0;
    display: flex;
    .product__info__shapes--square {
      width: 35px;
      height: 35px;
      background-color: $grey-shapes;
      border: 1px solid $black-three;
      margin-right: 10px;
    }
    .product__info__shapes--circle {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      background-color: $grey-shapes;
      border: 1px solid $black-three;
      margin-right: 10px;
    }
    .product__info__shapes--triangle {
      width: 0;
      height: 0;
      border-left: 17.5px solid transparent;
      border-right: 17.5px solid transparent;
      border-bottom: 35px solid $grey-shapes;
      margin-right: 10px;
    }
  }
}
</style>
