<template>
  <div class="flex flex-wrap mt-3 mb-26px">
    <div v-for="item in items" :key="item.id" class="mb-5 mr-5 flex">
      <input
        type="checkbox"
        :name="item.name"
        :id="item.name"
        :value="item.value"
        v-model="itemsSelected"
        @change="updateValue"
        class="input input-checkbox mr-10px hover:cursor-pointer"
        :class="`checked-${color}`"
      >
      <label :for="item.name" class="hover:cursor-pointer">{{ item.name }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFormCheckboxes',
  props: {
      items: Array,
      value: Array,
      color: String,
  },
  data() {
    return {
      itemsSelected: this.value || [],
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', this.itemsSelected)
    },
  },
}
</script>