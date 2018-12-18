<template>
  <nav class="flex flex-col justify-between">
    <div class="nav__top flex flex-col items-center">
      <div class="nav__toggle flex justify-center items-center">
        <a href="#">
          <img src="@/assets/images/hamburger_icon.svg" alt="Hamburger Icon">
        </a>
      </div>
      <div class="nav__search">
        <a href="#">
          <img src="@/assets/images/search_icon.svg" alt="Search Icon">
        </a>
      </div>
      <div class="nav__faq">
        <a href="#">
          <img src="@/assets/images/FAQ_icon.svg" alt="FAQ Icon">
        </a>
      </div>
      <hr class="divider">
      <div class="nav__items" v-for="(item, i) in navItems" :key="i">
        <div class="nav__item">
          <a href="#">
            <img :src="item.img" :alt="item.alt">
          </a>
        </div>
      </div>
    </div>
    <div class="nav__bot">
      <div class="nav__logo flex justify-center">
        <img src="@/assets/images/k_logo.svg" alt="Kowloon Logo">
      </div>
    </div>
  </nav>
</template>

<script>
const navDog = require('@/assets/images/nav/dog.svg')
const navCat = require('@/assets/images/nav/cat.svg')
const navFish = require('@/assets/images/nav/fish.svg')
const navHamster = require('@/assets/images/nav/hamster.svg')
const navBird = require('@/assets/images/nav/bird.svg')

export default {
  data() {
    return {
      navItems: [
        {
          img: navDog,
          alt: 'Nav item - Dog',
        },
        {
          img: navCat,
          alt: 'Nav item - Cat',
        },
        {
          img: navFish,
          alt: 'Nav item - Fish',
        },
        {
          img: navHamster,
          alt: 'Nav item - Hamster',
        },
        {
          img: navBird,
          alt: 'Nav item - Bird',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: $nav-width;
  height: $nav-height;
  .nav__toggle {
    width: 60px;
    height: 52px;
    background-color: $black-nav;
    margin-bottom: $nav-hamburger-margin-b;
  }
  .nav__search {
    padding: $nav-search-padding-t $nav-search-padding-r $nav-search-padding-b
      $nav-search-padding-l;
  }
  .nav__faq {
    padding: $nav-faq-padding-t $nav-faq-padding-r $nav-faq-padding-b
      $nav-faq-padding-l;
  }
  .nav__items {
    .nav__item {
      padding: $nav-item-padding-y $nav-item-padding-x;
    }
  }
  .nav__logo {
    margin-bottom: 21px;
  }
}
</style>

