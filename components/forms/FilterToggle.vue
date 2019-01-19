<template>
  <div class="flex mb-12 sm:mb-4 hover:cursor-pointer">
    <div class="text-15px mr-10px select-none">Advanced filter</div>
    <div
      :class="[ (toggled) ? 'dropdown-triangle-bot' : 'dropdown-triangle-right']"
      class="self-center dropdown-triangle dropdown-small dropdown-grey-300"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'FilterToggle',
  props: {
      toggled: {
        type: Boolean,
        default: false,
      },
  },
}
</script>