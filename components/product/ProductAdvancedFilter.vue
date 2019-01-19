<template>
  <section>
    <!-- Filter toggle -->
    <FilterToggle
      :toggled="toggleFilter"
      @click.native="$emit('update:toggleFilter', !toggleFilter)"
    />
    <div class="md:ml-16" v-if="toggleFilter">
      <!-- Collection Checkbox -->
      <span class="sub-title">By collection</span>
      <BaseFormCheckboxes
        :items="items"
        :color="color"
        v-model="localChecked"
        @input="updateChecked"
      />

      <!-- Price Slider -->
      <span class="sub-title">Price range</span>
      <div class="flex flex-col md:flex-row items-center mt-3">
        <div class="md:mr-10 w-full">
          <vue-slider
            ref="slider"
            v-bind="rangeSliderOptions"
            v-model="localPrice"
            @input="updatePrice"
          ></vue-slider>
        </div>
        <BaseFormInputRange
          :minPrice="localPrice[0]"
          :maxPrice="localPrice[1]"
          @update:minPrice="updatePrice"
          @update:maxPrice="updatePrice"
          class="flex justify-between md:justify-start w-full mt-4 md:mt-0"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FilterToggle from '@/components/forms/FilterToggle'
import BaseFormCheckboxes from '@/components/forms/BaseFormCheckboxes'
import BaseFormInputRange from '@/components/forms/BaseFormInputRange'

export default {
  name: 'ProductAdvancedFilter',
  props: {
      items: Array,
      itemsChecked: Array,
      color: String,
      toggleFilter: Boolean,
      rangeSliderOptions: Object,
      price: Array,
  },
  components: {
    FilterToggle,
    BaseFormCheckboxes,
    BaseFormInputRange,
  },
  data() {
    return {
      localChecked: this.itemsChecked || [],
      localPrice: this.price || [],
    }
  },
  methods: {
    updateChecked() {
      this.$emit('update:itemsChecked', this.localChecked)
    },
    updatePrice() {
      this.$emit('update:price', this.localPrice)
    },
  },
}
</script>
