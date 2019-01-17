<template>
  <div class="card flex flex-col product-image-selected">
    <!-- Big Image -->
    <img :src="selectedImage.url" alt="Highlighted Image" class="product-image-selected">
    <!-- Smaller Images -->
    <div class="flex -mx-2">
      <div v-for="item in productImages" :key="item.id" class="flex flex-col px-2">
        <!-- Image Container -->
        <div
          class="relative hover:cursor-pointer border-2 border-transparent"
          @click="setSelectedImage(item)"
          :class="{ 'border-white': item.id === selectedImage.id }"
        >
          <!-- Image -->
          <img :src="item.url" :alt="`Image ${item.id}`" class="block">
          <!-- White deselected background -->
          <div v-if="item.id !== selectedImage.id" class="product-image-deselected"/>
        </div>
        <!-- Image text -->
        <p class="product-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dogCoolingMat from "@/assets/images/products/dog_cooling_mat.jpg";

export default {
  name: 'ProductImage',
  data() {
    return {
      productImages: [
        {
          id: 1,
          url: dogCoolingMat,
          description: 'woordje tekst',
        },
        {
          id: 2,
          url: dogCoolingMat,
          description: 'Ander woordje tekst',
        },
        {
          id: 3,
          url: dogCoolingMat,
          description: 'Opnieuw woordje tekst',
        },
      ],
      selectedImage: {},
    }
  },
  methods: {
    setSelectedImage(image) {
      this.selectedImage = image
    }
  },
  mounted() {
    this.selectedImage = this.productImages[0]
  },
}
</script>
