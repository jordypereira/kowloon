<template>
  <div>
    <TheCookiesBar v-if="!acceptedCookies" @acceptedCookies="acceptedCookies = true"/>
    <div class="flex bg-black">
      <TheNavBar/>
      <div class="bg-grey-900 w-full min-h-screen">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'
import TheCookiesBar from '@/components/TheCookiesBar'

export default {
  components: {
    TheNavBar,
    TheCookiesBar,
  },
  data() {
    return {
      acceptedCookies: false,
    }
  },
  mounted() {
    if (localStorage.getItem('acceptedCookies')) {
      this.acceptedCookies = true
    }
  }
}
</script>