<template>
  <div class="border-primary">
    <div class="relative hover:cursor-pointer">
      <img :src="img" :alt="imgAlt" class="w-full">
      <slot/>
      <div
        class="opacity-0 absolute pin-l pin-t w-full h-full flex justify-center items-center"
        :class="[categoryColorHoverClass(categoryColor), { 'max-h-158px': md, 'max-h-136px': sm }]"
      >
        <div class="flex flex-col mt-6">
          <div class="mx-auto">
            <img src="~assets/images/products/detail-frame.png" alt="Detail Frame">
          </div>
          <p class="text-xl">View details</p>
        </div>
      </div>
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
      md: {
        type: Boolean,
        default: false,
      },
      sm: {
        type: Boolean,
        default: false,
      },
  },
  methods: {
    categoryColorHoverClass(color = 'pink') {
        return `hover:bg-${color} hover:opacity-86`
    },
  },
}
</script>