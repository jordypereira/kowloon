<template>
  <div class="w-full mt-19px mb-50px py-15px px-4 border border-grey">
    <div class="sub-title mb-15px">Specifications</div>
    <div class="my-15px">DIMENSIONS</div>
    <div class="flex">
      <div v-for="(dimension, i) in dimensions" :key="i" class="mr-5">{{ dimension }}</div>
    </div>
    <div class="my-15px">TITEL</div>
    <div>hier komt technische tekst</div>
  </div>
</template>

<script>
export default {
  name: 'ProductSpecifications',
  props: {
    dimensions: Array,
  },
}
</script>
