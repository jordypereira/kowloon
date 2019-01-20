<template>
  <div class="flex flex-col md:flex-row bg-grey-700 md:max-h-185px">
    <div class="md:w-1/2 lg:w-auto relative newsletter-image">
      <img src="@/assets/images/newsletterbanner.png" alt="Discover Amazing Kowloon Deals!">
      <div class="absolute pin-t pin-l flex flex-col items-center w-full text-center">
        <div class="text-newsletter lg:w-3/5 mt-8 lg:mt-34px">discover amazing Kowloon deals!</div>
        <div class="section-title mt-5 lg:mt-42px">only in our newsletter</div>
      </div>
    </div>
    <div class="flex flex-col flex-grow justify-center items-center my-28px">
      <div>
        <div class="sub-title">Subscribe to our newsletter</div>
        <div class="text-grey-400er mb-5">Lorum ipsum dolor sit amet</div>
        <form
          class="flex"
          :name="formName"
          method="POST"
          data-netlify="true"
          @submit.prevent="submitNewsletterForm"
        >
          <label aria-label="Enter your email for the newsletter" class="flex flex-col">
            <input
              type="text"
              class="input-text"
              placeholder="Domain @ name.com"
              name="email"
              v-model="form.email"
            >
            <span :class="errorClass">{{ formErrors.email }}</span>
          </label>
          <button class="btn-input" aria-label="Signs you up for the news letter.">OK</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewsletterBanner',
  props: {
      formName: String,
  },
  data() {
    return {
      form: {
        email: '',
      },
      formErrors: {
        email: '',
      },
      errorClass: '',
    }
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    clearErrors() {
      this.formErrors = {
        email: '',
      }
    },
    submitNewsletterForm() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      // Validate
      this.clearErrors()
      if(!this.validateEmail(this.form.email)) {
        this.formErrors.email = 'Please enter a correct e-mail address.'
        this.errorClass = 'text-pink'
        return
      }

      axios.post(
        "/",
        this.encode({
          "form-name": this.formName,
          ...this.form
        }),
        axiosConfig
      ).then(() => {
        this.formErrors.email = 'Success!'
        this.form.email = ''
        this.errorClass = 'text-green'
      }).catch(() => {
        this.formErrors.email = 'Something went wrong...'
        this.errorClass = 'text-pink'
      });
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
  }
}
</script>