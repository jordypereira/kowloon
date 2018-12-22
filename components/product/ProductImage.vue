<template>
  <div class="border-primary flex flex-col">
    <img
      src="@/assets/images/products/dog_cooling_mat.png"
      alt="Highlighted Image"
      class="product-image"
    >
    <div class="flex -mx-2">
      <div v-for="i in 3" :key="i" class="flex flex-col px-2">
        <img
          src="@/assets/images/products/dog_cooling_mat.png"
          :alt="`Image ${i}`"
          class="border-2 border-transparent hover:cursor-pointer"
          :class="{ 'border-white opacity-100': i === selectedImage, 'opacity-38': i !== selectedImage }"
          @click="selectedImage = i"
        >
        <p class="product-description">woordje tekst</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: 1,
    }
  }
}
</script>

<style lang="scss">
</style>

