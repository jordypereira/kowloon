<template>
  <div class="flex flex-wrap bg-grey-700 md:max-h-185px">
    <div class="relative newsletter-image">
      <img src="@/assets/images/newsletterbanner.png" alt="Discover Amazing Kowloon Deals!">
      <div class="absolute pin-t pin-l flex flex-col items-center w-full text-center">
        <div class="text-newsletter md:w-3/5 mt-8 md:mt-34px">discover amazing Kowloon deals!</div>
        <div class="section-title mt-5 md:mt-42px">only in our newsletter</div>
      </div>
    </div>
    <div class="flex flex-col flex-grow justify-center items-center my-28px">
      <div>
        <div class="sub-title">Subscribe to our newsletter</div>
        <div class="text-grey-400er mb-5">Lorum ipsum dolor sit amet</div>
        <div class="flex">
          <label aria-label="Enter your email for the newsletter">
            <input type="text" placeholder="Domain @ name.com" class="input-text">
          </label>
          <button class="btn-input" aria-label="Signs you up for the news letter.">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterBanner',
}
</script>