<template>
  <div>
    <h2 class="section-title">{{ 'Frequently asked questions'.toUpperCase() }}</h2>
    <div>
      <div
        class="bg-grey my-10px pl-23px pt-5 pr-5 pb-4 hover:cursor-pointer"
        v-for="q in faqQuestions"
        :key="q.id"
        @click="toggleFaq(q.id)"
      >
        <div class="flex justify-between">
          <div class="faq-title">Dit is een vraag</div>
          <div
            class="dropdown-triangle"
            :class="[ (activeFaq === q.id) ? 'dropdown-triangle-bot' : 'dropdown-triangle-right']"
          ></div>
        </div>
        <div v-if="activeFaq === q.id" class="ml-19px mt-11px">{{ q.description }}</div>
      </div>
    </div>
    <div class="text-right w-full">
      <a href="#" class="section-link">More questions?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data () {
    return {
      activeFaq: '',
      faqQuestions: [
        {
          id: 1,
          title: 'Dit is een vraag',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
        },
        {
          id: 2,
          title: 'Dit is een opengeklapte vraag ',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
        },
        {
          id: 3,
          title: 'Dit is een vraag',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
        },
      ],
    }
  },
  methods: {
    toggleFaq(id) {
      this.activeFaq === id ? this.activeFaq = '' : this.activeFaq = id
    }
  },
}
</script>