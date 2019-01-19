<template>
  <section>
    <!-- Filter toggle -->
    <FilterToggle
      :toggled="toggleFilter"
      @click.native="$emit('update:toggleFilter', !toggleFilter)"
      :titleClasses="filterTitleClasses"
    />
    <div class="md:ml-16" v-if="toggleFilter">
      <!-- Collection Checkbox -->
      <slot name="checkboxesTitle"/>
      <BaseFormCheckboxes
        :items="itemsCheckbox"
        :color="color"
        v-model="localChecked"
        @input="updateChecked"
      />

      <!-- Price Slider -->
      <slot name="priceTitle"/>
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
      itemsCheckbox: Array,
      itemsChecked: Array,
      color: String,
      toggleFilter: Boolean,
      price: Array,
      filterTitleClasses: String,
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
      rangeSliderOptions: {
        width: '100%',
        height: 4,
        dotSize: 18,
        min: 8.00,
        max: 499.00,
        interval: 0.01,
        useKeyboard: true,
        tooltip: 'false',
        enableCross: false,
        bgStyle: {
          backgroundColor: '#fff',
        },
        processStyle: {
          backgroundColor: '#9a9a9a'
        }
      },
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
