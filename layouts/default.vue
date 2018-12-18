<template>
  <div class="flex">
    <TheNavBar/>
    <div id="content">
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


<style lang="scss">
#content {
  background-color: $grey-content;
  width: 100%;
}
</style>
