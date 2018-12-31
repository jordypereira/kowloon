<template>
  <div class="card relative">
    <div
      class="card-body z-10"
      :class="{ 
      'card-md': md, 
      'card-sm': sm, 
      'card-lg': lg, 
      'card-md-stacked': (md && stacked) 
    }"
    >
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
    <div v-if="stacked" :class="{ 'card-md-stacked-1': (md && stacked) }"></div>
    <div v-if="stacked" :class="{ 'card-md-stacked-2': (md && stacked) }"></div>
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
      sm: {
        type: Boolean,
        default: false,
      },
      md: {
        type: Boolean,
        default: false,
      },
      lg: {
        type: Boolean,
        default: false,
      },
      stacked: {
        type: Boolean,
        default: false,
      },
  },
  components: {
      hoverDetailsFrame,
  },
}
</script>