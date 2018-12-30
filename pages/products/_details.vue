<template>
  <main class="container mx-auto text-white">
    <div class="text-center mt-13 mb-49px">
      <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
    </div>
    <div class="flex flex-col">
      <div class="flex -mx-27px mb-10px">
        <div class="pl-27px">
          <ProductImage/>
        </div>
        <div class="px-27px">
          <ProductInfo :productColors="productColors" :tags="productTags"/>
        </div>
      </div>
      <ProductSpecifications :dimensions="dimensions" class="mt-19px mb-50px"/>
      <RelatedProducts class="mb-58px" :category="getCategory(this.$route.params.details)"/>
      <FaqComponent class="mb-17px"/>
      <NewsletterBanner class="mb-4"/>
    </div>
  </main>
</template>

<script>
import ProductInfo from '~/components/product/ProductInfo'
import ProductImage from '~/components/product/ProductImage'
import ProductSpecifications from '~/components/product/ProductSpecifications'
import RelatedProducts from '~/components/product/RelatedProducts'
import FaqComponent from '~/components/FaqComponent'
import NewsletterBanner from '~/components/NewsletterBanner'

export default {
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
          ...this.getCategory(this.$route.params.details)
        },
        {
          id: 2,
          name: 'Splash \'n Fun',
        },
      ],
    }
  },
  methods: {
    getCategory(name) {
      switch (name) {
        case 'dog':
          return {
            name: 'Dogs',
            color: 'pink',
          }
          break;
        case 'cat':
          return {
            name: 'Cats',
            color: 'indigo',
          }
          break;
        case 'fish':
          return {
            name: 'Fishes',
            color: 'yellow',
          }
          break;
        case 'bird':
          return {
            name: 'Birds',
            color: 'green-light',
          }
          break;
        case 'small-animals':
          return {
            name: 'Small Animals',
            color: 'blue-light',
          }
          break;
      
        default: 'pink'
          break;
      }
    }
  },
}
</script>