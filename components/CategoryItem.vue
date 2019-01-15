<template>
  <div class="flex flex-col justify-between max-w-100px mx-49px">
    <div class="flex-1 flex justify-center items-center">
      <nuxt-link
        :to="`/products/${category.name}/view`"
        :class="category.icon"
        :aria-label="`Links to the ${category.name} product page.`"
      ></nuxt-link>
    </div>
    <p
      class="category-title mt-5 text-center"
      :style="{ fontSize: categoryFontSize }"
    >{{ category.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
  },
  computed: {
    categoryFontSize() {
      return this.category.fontSize ? this.category.fontSize : '20px'
    }
  },
}
</script>
