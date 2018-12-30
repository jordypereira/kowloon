<template>
  <div class="flex bg-black">
    <TheNavBar/>
    <div class="bg-grey-900 w-full min-h-screen">
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