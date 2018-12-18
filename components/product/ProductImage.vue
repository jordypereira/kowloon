<template>
  <div class="product__image">
    <div class="product__image__selected">
      <img
        src="@/assets/images/products/dog_cooling_mat.png"
        alt="Highlighted Image"
        class="product__image__selected__image w-full"
      >
    </div>
    <div class="product__image__gallery">
      <div v-for="i in 3" :key="i" class="product__image__gallery__image">
        <img
          src="@/assets/images/products/dog_cooling_mat.png"
          :alt="`Image ${i}`"
          :class="{ 'product__image__gallery__image__image--selected': i === 1 }"
          class="product__image__gallery__image__image"
        >
        <p class="product__image__gallery__image__description">woordje tekst</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.product__image {
  min-width: 477px;
  background-color: #555;
  border: 1px solid $grey-faq;
  margin: 0 0 10px 0;

  .product__image__selected__image {
    padding: 6px 5px 4.4px 6px;
  }

  .product__image__gallery {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .product__image__gallery__image {
      padding: 4.4px 4px 5px 4px;
      .product__image__gallery__image__image {
        opacity: 0.38;
      }
      .product__image__gallery__image__image--selected {
        border: 2px solid #fff;
        opacity: 1;
      }
      .product__image__gallery__image__description {
        margin-top: 5.8px;
        font-size: 12px;
        font-family: Arial, sans-serif;
        line-height: 1.5;
        letter-spacing: -0.2px;
      }
    }
  }
}
</style>

