<template>
  <div class="absolute z-30 bg-white h-full opacity-95 pin-t pin-r pin-l md:pin-l-60px">
    <!-- Close Icon -->
    <div
      class="absolute flex flex-col pin-r pin-t m-4 md:m-5 hover:cursor-pointer"
      @click="closeOverlay"
    >
      <i class="icon icon-x-close bg-grey-300"></i>
      <span class="text-grey-300">esc</span>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'OverlayLayout',
  methods: {
    closeOverlay() {
      this.$emit('closeOverlay')
    },
  },
}
</script>
