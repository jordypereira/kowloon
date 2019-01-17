<template>
  <div
    class="flex flex-wrap justify-between md:justify-start lg:justify-around items-center md:items-end"
  >
    <template v-for="item in categoryList">
      <div
        :key="`category-${item.id}`"
        class="w-full xs:w-1/3 sm:w-1/6 md:w-1/5 lg:w-auto flex justify-center items-center mt-8"
        :class="[(item.id % 2 !== 0) ? 'xs:justify-start sm:justify-center' : 'xs:justify-end sm:justify-center']"
      >
        <CategoryItem :category="item"/>
      </div>

      <div
        :key="`divider-desktop-${item.id}`"
        v-if="item.id !== categoryList.length"
        class="hidden sm:block divider-vertical"
      ></div>
      <div
        :key="`divider-mobile-${item.id}`"
        v-if="item.id % 2 !== 0"
        class="hidden xs:flex sm:hidden xs:w-1/3 sm:w-auto justify-center mt-8"
      >
        <div class="divider-vertical"></div>
      </div>
    </template>
  </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'
import dogsSymbol from '@/assets/images/symbols/dog.svg'
import catsSymbol from '@/assets/images/symbols/cat.svg'
import fishSymbol from '@/assets/images/symbols/fish.svg'
import birdsSymbol from '@/assets/images/symbols/bird.svg'
import smallAnimalsSymbol from '@/assets/images/symbols/hamster.svg'
import otherSymbol from '@/assets/images/symbols/other.svg'

export default {
  name: 'Categories',
  components: {
      CategoryItem,
  },
  data() {
    return {
      categoryList: [
        {
          id: 1,
          name: 'Dogs',
          icon: 'icon icon-dog icon-large',
          color: 'pink',
        },
        {
          id: 2,
          name: 'Cats',
          icon: 'icon icon-cat icon-large',
          color: 'indigo',
        },
        {
          id: 3,
          name: 'Fish',
          icon: 'icon icon-fish icon-large',
          color: 'yellow',
        },
        {
          id: 4,
          name: 'Birds',
          icon: 'icon icon-bird icon-large',
          color: 'green-light',
        },
        {
          id: 5,
          name: 'Small Animals',
          icon: 'icon icon-small-animal icon-large',
          color: 'blue-light',
          fontSize: '15px',
        },
        {
          id: 6,
          name: 'Other',
          icon: 'icon icon-other icon-large',
          color: 'white',
          fontSize: '15px',
        },
      ],
    }
  },
}
</script>