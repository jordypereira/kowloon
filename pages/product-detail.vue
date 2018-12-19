<template>
  <main class="container mx-auto text-white min-h-screen">
    <div class="text-center mt-52 mb-49">
      <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
    </div>
    <div class="flex flex-col">
      <div class="flex -mx-27px mb-10px">
        <div class="pl-27px">
          <ProductImage/>
        </div>
        <div class="px-27px">
          <ProductInfo :productColors="productColors"/>
        </div>
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