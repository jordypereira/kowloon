<template>
  <div class="container mx-auto text-white">
    <header class="flex justify-center mt-13 mb-49px">
      <i class="icon icon-kowloon"></i>
    </header>
    <section class="flex flex-col">
      <div class="flex -mx-27px mb-10px">
        <div class="pl-27px">
          <ProductImage/>
        </div>
        <div class="px-27px">
          <ProductInfo :productColors="productColors" :tags="productTags"/>
        </div>
      </div>
      <ProductSpecifications :dimensions="dimensions" class="mt-19px mb-50px"/>
      <h2 class="section-title uppercase mb-22px">Gerelateerde Producten</h2>
      <RelatedProducts
        class="mb-58px"
        :category="this.$store.getters.getCategory(this.$route.params.name)"
        :url="`/products/${this.$store.getters.getCategory(this.$route.params.name).name}/details`"
        arrows
      />
      <FaqComponent class="mb-17px"/>
      <NewsletterBanner class="mb-4"/>
    </section>
  </div>
</template>

<script>
import ProductInfo from '~/components/product/ProductInfo'
import ProductImage from '~/components/product/ProductImage'
import ProductSpecifications from '~/components/product/ProductSpecifications'
import RelatedProducts from '~/components/product/RelatedProducts'
import FaqComponent from '~/components/FaqComponent'
import NewsletterBanner from '~/components/NewsletterBanner'

export default {
  name: 'ProductDetails',
  components: {
    ProductInfo,
    ProductImage,
    ProductSpecifications,
    RelatedProducts,
    FaqComponent,
    NewsletterBanner,
  },
  data() {
    return {
      productColors: ['white', 'black', 'blue'],
      dimensions: ['S - Ø 53x18cm', 'M - Ø 53x18cm', 'L - Ø 53x18cm'],
      productTags: [
        {
          id: 1,
          ...this.$store.getters.getCategory(this.$route.params.name)
        },
        {
          id: 2,
          name: 'Splash \'n Fun',
        },
      ],
    }
  },
}
</script>