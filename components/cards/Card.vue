<template>
  <div class="card" :class="{ 'card-md': md, 'card-sm': sm }">
    <div class="relative hover:cursor-pointer">
      <img :src="img" :alt="imgAlt" class="w-full">
      <slot/>
      <hoverDetailsFrame v-if="hoverFrame === 'details'" :color="categoryColor"/>
    </div>

    <div v-if="name" class="flex justify-between text-base mx-10px">
      <p class="font-bold">{{ name }}</p>
      <p>€ {{ price }}</p>
    </div>
  </div>
</template>

<script>
import hoverDetailsFrame from '@/components/cards/CardHoverFrameDetails'

export default {
  name: 'Card',
  props: {
      img: String,
      imgAlt: String,
      name: String,
      price: String,
      categoryColor: String,
      hoverFrame: String,
      md: {
        type: Boolean,
        default: false,
      },
      sm: {
        type: Boolean,
        default: false,
      },
  },
  components: {
      hoverDetailsFrame,
  },
}
</script>