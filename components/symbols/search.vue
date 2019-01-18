<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    class="fill-current stroke-current"
  >
    <path
      d="M32.309,76a11.687,11.687,0,0,0-9.1,19.028l-7.727,7.724a1.245,1.245,0,0,0,1.761,1.761l7.727-7.727A11.689,11.689,0,1,0,32.309,76Zm0,21.582A9.891,9.891,0,1,1,42.2,87.69,9.9,9.9,0,0,1,32.309,97.581Z"
      :transform="`translate(${translateX} ${translateY})`"
      :stroke-width="strokeWidth"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'SearchIcon',
  props: {
      strokeWidth: {
        type: Number,
        default: 0,
      },
  },
  computed: {
    translateX(){
      return (-15.125 + this.strokeWidth)
    },
    translateY(){
      return (-76 + this.strokeWidth)
    },
    width() {
      return 28.875 + this.strokeWidth * 2
    },
    height() {
      return 28.875 + this.strokeWidth * 2
    },
  },
}
</script>
