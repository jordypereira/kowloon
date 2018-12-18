<template>
  <main class="container">
    <div class="text-center mt-52 mb-49">
      <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
    </div>
    <div class="product">
      <div class="productrow">
        <ProductImage/>
        <ProductInfo :productColors="productColors"/>
      </div>
      <ProductSpecifications :dimensions="dimensions"/>
    </div>
  </main>
</template>

<script>
import ProductInfo from "~/components/product/ProductInfo"
import ProductImage from "~/components/product/ProductImage"
import ProductSpecifications from "~/components/product/ProductSpecifications"

export default {
  data() {
    return {
      productColors: ["white", "black", "blue"],
      dimensions: ['S - Ø 53x18cm', 'M - Ø 53x18cm', 'L - Ø 53x18cm']
    }
  },
  components: {
    ProductInfo,
    ProductImage,
    ProductSpecifications,
  },
}
</script>

<style lang="scss">
body {
  background-color: #333;
}
.productrow {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 27px;
}
.container {
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: $grey-content;
  color: $white;
}

.product {
  display: flex;
  flex-direction: column;
}

.bg--white {
  background-color: $white;
}
.bg--blue {
  background-color: $sapphire;
}
.bg--black {
  background-color: $black;
}
.bg--pink {
  background: $bubble-gum-pink;
}
</style>
