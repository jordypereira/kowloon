<template>
  <div>
    <h2 class="section-title">{{ 'Frequently asked questions'.toUpperCase() }}</h2>
    <div class="faq">
      <div
        class="faq-closed bg-grey my-10px pl-23px pt-5 pr-5 pb-4 flex justify-between"
        v-for="q in faqQuestions"
        :key="q.id"
      >
        <div class="faq-title">Dit is een vraag</div>
        <div class="dropdown">></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data () {
    return {
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
}
</script>