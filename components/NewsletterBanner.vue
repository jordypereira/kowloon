<template>
  <div class="flex bg-grey-700 max-h-185px">
    <div class="relative">
      <img src="@/assets/images/newsletterbanner.png" alt="Discover Amazing Kowloon Deals!">
      <div class="absolute pin-t pin-l flex flex-col items-center w-full text-center">
        <div class="title w-3/5 mt-34px">discover amazing Kowloon deals!</div>
        <div class="section-title mt-42px">only in our newsletter</div>
      </div>
    </div>
    <div class="flex flex-col flex-grow justify-center items-center">
      <div>
        <div class="sub-title">Subscribe to our newsletter</div>
        <div class="text-grey-400er mb-5">Lorum ipsum dolor sit amet</div>
        <div class="flex">
          <input type="text" placeholder="Domain @ name.com" class="input-text">
          <button class="btn-input">OK</button>
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