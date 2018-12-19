<template>
  <div class="flex">
    <TheNavBar/>
    <div class="bg-grey-darkest w-full">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'

export default {
  components: {
    TheNavBar,
  },
  
}
</script>