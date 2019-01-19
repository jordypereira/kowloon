<template>
  <div class="text-white">
    <header class="flex justify-center mt-13 mb-49px">
      <i class="icon icon-kowloon"></i>
    </header>
    <main class="container flex flex-col lg:px-0">
      <section class="flex flex-col md:flex-row -mx-27px mb-10px">
        <!-- Flip These On Desktop -->
        <div class="flex flex-col md:flex-row-reverse">
          <!-- Product Image and Information -->
          <!-- Product Info Title -->
          <div class="px-27px">
            <!-- Product Logo and Tags -->
            <div class="flex mb-5">
              <i class="icon icon-k mr-6px"></i>
              <div class="flex -mx-1">
                <Tag
                  v-for="tag in productTags"
                  :key="tag.id"
                  :tagName="tag.name"
                  :tagColor="tag.color"
                  class="px-1"
                />
              </div>
            </div>
            <h1 class="title uppercase mt-5 mb-18px">Cooling mat</h1>
            <p class="price mb-5 mt-18px">€ 15,49</p>
            <!-- Product Info Description -->
            <div class="hidden md:block">
              <ProductInfo :productColors="productColors"/>
            </div>
          </div>
          <!-- Product Images -->
          <div class="pl-27px">
            <ProductImage/>
          </div>
        </div>
        <!-- Product Info Description -->
        <div class="md:hidden mt-6">
          <ProductInfo :productColors="productColors"/>
        </div>
      </section>
      <!-- Product Specifications  -->
      <ProductSpecifications :dimensions="dimensions" class="mt-19px mb-50px"/>
      <section class="mb-58px">
        <h2 class="section-title uppercase mb-22px">Related Items.</h2>
        <RelatedProducts
          :category="this.$store.getters.getCategory(this.$route.params.name)"
          :url="`/products/${this.$store.getters.getCategory(this.$route.params.name).name}/details`"
          arrows
          class="hidden md:block"
        />
        <MiniSlider
          class="mb-4 md:hidden"
          :category="this.$store.getters.getCategory(this.$route.params.name)"
          :url="`/products/${this.$store.getters.getCategory(this.$route.params.name).name}/details`"
        />
        <a href="#" class="section-link mt-4">View more</a>
      </section>
      <FaqComponent class="mb-17px"/>
      <NewsletterBanner class="mb-4" formName="newsletter-product-details"/>
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
import Tag from '@/components/Tag'
import MiniSlider from '~/components/product/MiniSlider'

export default {
  name: 'ProductDetails',
  components: {
    ProductInfo,
    ProductImage,
    ProductSpecifications,
    RelatedProducts,
    FaqComponent,
    NewsletterBanner,
    Tag,
    MiniSlider,
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