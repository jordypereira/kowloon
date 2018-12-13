<template>
  <div class="product__specifications">
    <div class="product__specifications__title">Specifications</div>
    <div class="product__specifications__dimensions__label">Dimensions</div>
    <div class="product__specifications__dimensions">
      <div
        v-for="(dimension, i) in dimensions"
        :key="i"
        class="product__specifications_dimensions_dimension"
      >{{ dimension }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSpecifications",
  props: {
    dimensions: Array
  },
}
</script>

<style lang="scss">
.product__specifications {
  width: 100%;
  padding: 15px 16px;
  border: 1px solid $faq-background;
  .product__specifications__dimensions {
    display: flex;
    .product__specifications__dimensions__dimension {
      margin-right: 20px;
    }
  }
}
</style>
