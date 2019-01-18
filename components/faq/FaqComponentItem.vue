<template>
  <div class="my-10px pl-23px pt-5 pr-5 pb-4" :class="backgroundClasses">
    <div class="flex justify-between">
      <div class="faq-title" :class="[inverse ? 'text-grey-750' : 'text-white']">{{ title }}</div>
      <!-- Dropdown Triangle Icon -->
      <div
        v-if="dropdownTriangle"
        class="dropdown-triangle"
        :class="[ (toggled) ? 'dropdown-triangle-bot' : 'dropdown-triangle-right']"
      ></div>
    </div>
    <div v-if="toggled" class="ml-19px mt-11px">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'FaqComponentItem',
  props: {
    id: Number,
    title: String,
    description: String,
    toggled: {
      type: Boolean,
      default: false,
    },
    dropdownTriangle: {
      type: Boolean,
      default: true,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundClasses() {
      const classes = []

      classes.push(this.inverse ? 'bg-white' : 'bg-grey')
      classes.push(this.shadow ? 'shadow-md' : '')
      classes.push(this.clickable ? 'hover:cursor-pointer' : '')

      return classes
    }
  },
}
</script>
