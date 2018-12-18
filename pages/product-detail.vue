<template>
  <main class="container">
    <h1 class="title">
      <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
    </h1>
    <div class="product">
      <div>
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
.container {
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: $grey-content;
  color: $white;
}
.title {
  text-align: center;
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
