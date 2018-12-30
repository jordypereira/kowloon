<template>
  <div class="flex justify-between">
    <div v-for="item in categoryList" :key="item.id" class="flex">
      <CategoryItem :category="item"/>
      <div v-if="item.id !== categoryList.length" class="divider-vertical"></div>
    </div>
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
  components: {
      CategoryItem,
  },
  data() {
    return {
      categoryList: [
        {
          id: 1,
          name: 'Dogs',
          url: dogsSymbol,
          color: 'pink',
        },
        {
          id: 2,
          name: 'Cats',
          url: catsSymbol,
          color: 'indigo',
        },
        {
          id: 3,
          name: 'Fish',
          url: fishSymbol,
          color: 'yellow',
        },
        {
          id: 4,
          name: 'Birds',
          url: birdsSymbol,
          color: 'green-light',
        },
        {
          id: 5,
          name: 'Small Animals',
          url: smallAnimalsSymbol,
          color: 'blue-light',
          fontSize: '15px',
        },
        {
          id: 6,
          name: 'Other',
          url: otherSymbol,
          color: 'white',
          fontSize: '15px',
        },
      ],
    }
  },
}
</script>