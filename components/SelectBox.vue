<template>
  <div>
    <ul class="list-reset select-none">
      <li @click="toggleMenu()" class="form-select relative mb-px">
        {{ value.name !== undefined ? value.name : placeholder }}
        <span
          class="absolute pin-r pin-t h-full mr-5 flex items-center"
        >
          <i class="icon icon-sort"></i>
        </span>
      </li>

      <div v-if="showMenu" class="absolute z-10">
        <li
          v-for="option in options"
          :key="option.id"
          @click="updateValue(option)"
          class="form-option"
          :class="{'bg-grey-75': option.id === value.id}"
        >{{ option.name }}</li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: [Array, Object]
      },
      value: Object,
      placeholder: String,
    },
    data() {
      return {
        showMenu: false,
      }
    },
    methods: {
      updateValue(option) {
        this.showMenu = false
        this.$emit('input', option)
      },
      toggleMenu() {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>