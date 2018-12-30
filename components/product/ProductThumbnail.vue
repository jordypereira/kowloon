<template>
  <div class="border-primary" :class="categoryColorHoverClass(categoryColor)">
    <div class="relative">
      <img :src="img" :alt="imgAlt" class="w-full">
      <slot/>
    </div>

    <div v-if="name" class="flex justify-between text-base mx-10px">
      <p class="font-bold">{{ name }}</p>
      <p>€ {{ price }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductThumbnail',
  props: {
      img: String,
      imgAlt: String,
      name: String,
      price: String,
      categoryColor: String,
  },
  methods: {
    categoryColorHoverClass(color = 'pink') {
        return `hover:bg-${color}`
    },
  },
}
</script>