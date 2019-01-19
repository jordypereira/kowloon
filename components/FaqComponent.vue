<template>
  <section>
    <h2 class="section-title uppercase">Frequently asked questions</h2>
    <div>
      <FaqComponentItem
        class="my-10px pl-23px hover:cursor-pointer"
        v-for="item in faqItems.slice(0, itemsToShow)"
        :key="item.id"
        v-bind="item"
        :toggled="activeFaq === item.id"
        @click.native="toggleFaq(item.id)"
      />
    </div>
    <div class="mt-8 md:mt-0 text-center md:text-right w-full">
      <a href="#" class="section-link">More questions?</a>
    </div>
  </section>
</template>

<script>
import FaqComponentItem from '@/components/faq/FaqComponentItem'

import faqItems from '@/services/faqItems'

export default {
  name: 'FAQ',
  components: {
      FaqComponentItem,
  },
  data () {
    return {
      activeFaq: 2,
      faqItems,
      itemsToShow: 3,
    }
  },
  methods: {
    toggleFaq(id) {
      this.activeFaq === id ? this.activeFaq = '' : this.activeFaq = id
    }
  },
}
</script>