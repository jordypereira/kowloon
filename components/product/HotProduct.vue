<template>
  <div class="border-primary hot-product">
    <div class="relative">
      <img :src="item.img" :alt="item.name" class="w-full">
      <slot/>
    </div>

    <div class="flex justify-between text-base mx-10px mb-9px">
      <p class="font-bold">{{ item.name }}</p>
      <p>€ {{ item.price }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HotProduct',
  props: {
      item: Object,
  },
}
</script>