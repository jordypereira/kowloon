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
        <!-- Absolute placed buttons appear here -->
        <slot/>
        <hoverDetailsFrame v-if="hoverFrame === 'details'" :color="categoryColor"/>
      </div>

      <div v-if="md && name" class="flex justify-between text-base mx-10px">
        <p class="font-bold">{{ name }}</p>
        <p>€ {{ price }}</p>
      </div>
      <div v-if="lg && name" class="ml-10px">
        <p class="price mb-2 mt-2">{{ name }}</p>
        <p class="pr-5">{{ description }}</p>
        <div class="flex justify-between items-center mt-4">
          <p class="text-base">€ {{ price }}</p>
          <button class="btn btn-sm" :class="`bg-${categoryColor}`">Want to know more?</button>
        </div>
      </div>
    </div>

    <!-- Stacked effect -->
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
      description: String,
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