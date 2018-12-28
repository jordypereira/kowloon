<template>
  <div class="flex flex-col justify-between">
    <img :src="category.url" :alt="`Symbol of the category ${category.name}`">
    <p class="section-title">{{ category.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
  }
}
</script>
