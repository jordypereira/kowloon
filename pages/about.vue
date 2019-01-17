<template>
  <div>
    <!-- Header Image -->
    <header class="relative flex justify-center w-full">
      <i class="icon icon-kowloon mt-13 absolute z-10"></i>
      <div class="header-image">
        <img src="~assets/images/about/header.jpg" alt="Header image of a girl hugging a white dog">
      </div>
    </header>
    <main class="container mx-auto px-4 text-white mt-8 md:mt-16">
      <!-- Icon and Tag -->
      <div class="flex">
        <i class="mr-5px icon icon-k"></i>
        <Tag tagName="about us" class="px-1"/>
      </div>

      <h1 class="title uppercase mb-42px mt-10">About Us</h1>

      <!-- Description and contact info -->
      <section class="mb-12 md:mb-20 flex flex-col md:flex-row justify-between">
        <div class="flex-1">
          <h2 class="section-title uppercase mb-14px">Kowloon</h2>
          <div v-html="introText"></div>
        </div>
        <address class="mt-12 md:mt-0 w-236px pb-5 pl-5 border-l border-b border-grey-650">
          <h2 class="section-title uppercase mb-14px">Contact</h2>
          <ul>
            <li>Decks Johan</li>
            <li>Bosdreef 7</li>
            <li>2200 Herentals</li>
          </ul>
        </address>
      </section>

      <!-- Message form -->
      <section class="my-12 md:my-20">
        <h2 class="section-title uppercase mb-28px">Leave us a message</h2>
        <form name="contact" method="POST" data-netlify="true" @submit.prevent="submitContactForm">
          <div class="flex flex-col mb-8">
            <label for="email" class="mb-3 sub-title">E-mail</label>
            <input
              type="text"
              class="input-text"
              placeholder="name@domain.com"
              name="email"
              v-model="form.email"
            >
          </div>
          <div class="flex flex-col mb-8">
            <label for="message" class="mb-3 sub-title">Your message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              class="input-textarea"
              placeholder="Write your message here."
              v-model="form.message"
            ></textarea>
          </div>
          <button class="btn btn-primary" aria-labelledby="Sends your message to us.">Send</button>
        </form>
      </section>

      <!-- FAQ -->
      <FaqComponent class="my-12 md:my-20"/>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

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
      form: {
        email: '',
        message: '',
      }
    }
  },
  methods: {
    submitContactForm() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      );
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
  },
}
</script>