<template>
  <div class="container mx-auto text-white">
    <header class="flex justify-center mt-13 mb-49px">
      <i class="icon icon-kowloon"></i>
    </header>
    <main class="flex flex-col px-4 lg:px-0">
      <div class="flex -mx-27px mb-10px">
        <div class="pl-27px">
          <ProductImage/>
        </div>
        <div class="px-27px">
          <ProductInfo :productColors="productColors" :tags="productTags"/>
        </div>
      </div>
      <ProductSpecifications :dimensions="dimensions" class="mt-19px mb-50px"/>
      <section class="mb-58px">
        <h2 class="section-title uppercase mb-22px">Gerelateerde Producten</h2>
        <RelatedProducts
          :category="this.$store.getters.getCategory(this.$route.params.name)"
          :url="`/products/${this.$store.getters.getCategory(this.$route.params.name).name}/details`"
          arrows
        />
      </section>
      <FaqComponent class="mb-17px"/>
      <NewsletterBanner class="mb-4"/>
    </main>
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