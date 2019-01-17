<template>
  <div
    class="card-hover opacity-0 absolute pin-l pin-t w-full h-full flex justify-center items-center"
    :class="categoryColorHoverClass(color)"
  >
    <div class="flex flex-col mt-6">
      <div class="mx-auto">
        <img src="~assets/images/products/detail-frame.png" alt="Detail Frame">
      </div>
      <p class="text-xl">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hoverDetailsFrame',
  props: {
      color: String,
  },
  methods: {
    categoryColorHoverClass(color = 'pink') {
        return `hover:bg-${color} hover:opacity-86`
    },
  },
}
</script>