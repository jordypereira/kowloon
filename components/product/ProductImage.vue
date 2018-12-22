<template>
  <div class="product__image border-primary">
    <div class="product__image__selected">
      <img
        src="@/assets/images/products/dog_cooling_mat.png"
        alt="Highlighted Image"
        class="product__image__selected__image w-full"
      >
    </div>
    <div class="product__image__gallery flex justify-around w-full">
      <div v-for="i in 3" :key="i" class="product__image__gallery__image">
        <img
          src="@/assets/images/products/dog_cooling_mat.png"
          :alt="`Image ${i}`"
          class="border-2 border-transparent hover:cursor-pointer"
          :class="{ 'border-white opacity-100': i === selectedImage, 'opacity-38': i !== selectedImage }"
          @click="selectedImage = i"
        >
        <p class="product__image__gallery__image__description">woordje tekst</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: 1,
    }
  }
}
</script>

<style lang="scss">
.product__image {
  min-width: 477px;

  .product__image__gallery {
    .product__image__gallery__image {
      padding: 4.4px 4px 5px 4px;
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

