<template>
  <div class="bg-beige w-full absolute pin-t md:relative z-30 shadow-lg">
    <i
      class="absolute pin-t pin-r icon icon-x-close icon-orange m-4 md:m-5 hover:cursor-pointer"
      @click="setAcceptedCookie(false)"
    ></i>
    <div class="flex justify-center pt-27px md:pt-12 pb-2 md:pb-10">
      <div class="hidden md:flex relative ml-2" style="height: 123px;">
        <i class="icon icon-cookie"></i>
        <i class="icon icon-crumble absolute pin-b pin-r mr-10 mb-6"></i>
      </div>
      <div class="md:w-2/3 mx-7px md:ml-16">
        <h2 class="text-cookie-title text-orange relative inline">
          Cookies
          <i class="md:hidden icon icon-crumble absolute pin-t pin-r -mr-12 -mt-2"></i>
        </h2>
        <p
          class="mt-4 text-grey-900"
          style="max-width: 688px;"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <button class="btn btn-md bg-orange mt-6" @click="setAcceptedCookie(true)">ok, verder surfen</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCookiesBar',
  methods: {
    setAcceptedCookie(value) {
      localStorage.setItem('acceptedCookies', value)
      this.$emit('acceptedCookies')
    },
  }
}
</script>