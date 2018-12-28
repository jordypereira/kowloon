<template>
  <div>
    <div v-for="item in categoryList" :key="item.id">
      <CategoryItem :category="item"/>
    </div>
  </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'

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
        },
      ],
    }
  },
}
</script>