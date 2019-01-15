<template>
  <div class="w-full py-15px px-4 border border-grey">
    <h3 class="sub-title mb-15px">Specifications</h3>
    <div class="my-15px">{{ 'Dimensions'.toUpperCase() }}</div>
    <div class="flex">
      <div v-for="(dimension, i) in dimensions" :key="i" class="mr-5">{{ dimension }}</div>
    </div>
    <div class="my-15px">{{ 'Titel'.toUpperCase() }}</div>
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
