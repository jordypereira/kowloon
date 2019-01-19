<template>
  <div class="relative">
    <TheCookiesBar v-if="!acceptedCookies" @acceptedCookies="acceptedCookies = true"/>
    <SearchPage v-if="$store.state.searchToggle"/>
    <FaqPage v-if="$store.state.faqToggle"/>
    <div class="flex bg-black">
      <TheNavBar/>
      <div class="bg-grey-900 w-full min-h-screen">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPage from '@/pages/search'
import FaqPage from '@/pages/faq'

import TheNavBar from '@/components/TheNavBar'
import TheCookiesBar from '@/components/TheCookiesBar'

export default {
  components: {
    SearchPage,
    FaqPage,
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
  },
}
</script>