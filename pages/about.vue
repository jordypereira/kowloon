<template>
  <section>
    <!-- Header Image -->
    <header class="relative flex justify-center w-full">
      <div class="mt-13 absolute z-10">
        <img src="@/assets/images/Kowloon_logo.svg" alt="Kowloon Logo">
      </div>
      <img
        src="~assets/images/about/header.jpg"
        alt="Slider Image of a dog"
        class="max-h-480px w-full"
      >
    </header>
    <div class="container mx-auto text-white mt-16">
      <!-- Tag -->
      <div class="flex">
        <img src="@/assets/images/k_logo.svg" alt="Kowloong Logo Small" class="mr-5px">
        <Tag tagName="about us" class="px-1"/>
      </div>

      <h1 class="title uppercase mb-42px mt-10">About Us</h1>

      <!-- Description and contact info -->
      <div class="mb-20 flex flex-col md:flex-row justify-between">
        <div class="flex-1">
          <h2 class="section-title uppercase mb-14px">Kowloon</h2>
          <div v-html="introText"></div>
        </div>
        <div class="w-236px pb-5 pl-5 border-l border-b border-grey-650">
          <h2 class="section-title uppercase mb-14px">Contact</h2>
          <ul>
            <li>Decks Johan</li>
            <li>Bosdreef 7</li>
            <li>2200 Herentals</li>
          </ul>
        </div>
      </div>

      <!-- Message form -->
      <div class="my-20">
        <h2 class="section-title uppercase mb-28px">Leave us a message</h2>
        <form>
          <div class="flex flex-col mb-8">
            <label for="email" class="mb-3 sub-title">E-mail</label>
            <input type="text" class="input-text" placeholder="name@domain.com">
          </div>
          <div class="flex flex-col mb-8">
            <label for="message" class="mb-3 sub-title">Your message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              class="input-textarea"
              placeholder="Write your message here."
            ></textarea>
          </div>
          <button class="btn-primary">Send</button>
        </form>
      </div>

      <!-- FAQ -->
      <FaqComponent class="my-20"/>
    </div>
  </section>
</template>

<script>
import Tag from '@/components/Tag'
import FaqComponent from '~/components/FaqComponent'

export default {
  name: 'About',
  components: {
    Tag,
    FaqComponent,
  },
  data() {
    return {
      introText: '<p>Pet Concept, active since 1998, is developing, importing and exporting products for pets worldwide.</p><br><p>natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae sequi nesciunt.</p>',
    }
  },
}
</script>