<template>
  <div class="flex bg-grey-darker">
    <div class="relative">
      <img src="@/assets/images/newsletterbanner.png" alt="Discover Amazing Kowloon Deals!">
      <div class="absolute pin-t pin-l flex flex-col items-center w-full h-full text-center">
        <div class="title w-2/3 mt-10">Discover Amazing Kowloon Deals!</div>
        <div class="subtitle">Only in our newsletter</div>
      </div>
    </div>
    <div class="flex flex-col flex-grow justify-center items-center">
      <div>
        <div class="sub-title">Subscribe to our newsletter</div>
        <div class="text-grey-lighter mb-5">Lorum ipsum dolor sit amet</div>
        <div class="flex">
          <input type="text" placeholder="Domain @ name.com" class="input-field">
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