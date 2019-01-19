export const state = () => ({
  navToggle: false,
  faqToggle: false,
  searchToggle: false,
  screens: {
    'xs': 290,
    'sm': 576,
    'md': 768,
    'lg': 960,
  },
  categories: {
    dog: {
      name: 'Dogs',
      shortName: 'Dog',
      color: 'pink',
    },
    cat: {
      name: 'Cats',
      shortName: 'Cat',
      color: 'indigo',
    },
    fish: {
      name: 'Fishes',
      shortName: 'Fish',
      color: 'yellow',
    },
    bird: {
      name: 'Birds',
      shortName: 'Bird',
      color: 'green-light',
    },
    smallAnimal: {
      name: 'Small Animals',
      shortName: 'Small Animal',
      color: 'blue-light',
    },
    other: {
      name: 'Other',
      color: 'beige',
    },
  }
})

export const mutations = {
  // All
  closeAllToggles (state) {
    state.navToggle = false
    state.searchToggle = false
    state.faqToggle = false
  },
  // Nav
  closeNav (state) {
    state.navToggle = false
  },
  toggleNav (state) {
    state.navToggle = !state.navToggle
  },
  // FAQ
  toggleFaq (state) {
    state.faqToggle = !state.faqToggle
    state.navToggle = false
    state.searchToggle = false
  },
  closeFaq (state) {
    state.faqToggle = false
  },
  // Search
  toggleSearch (state) {
    state.searchToggle = !state.searchToggle
    state.navToggle = false
    state.faqToggle = false
  },
  closeSearch (state) {
    state.searchToggle = false
  },
}

export const getters = {
  getCategory: state => name => {
    switch (name) {
    case 'dog':
    case 'Dog':
    case 'dogs':
    case 'Dogs':
      return state.categories.dog
    case 'cat':
    case 'Cat':
    case 'cats':
    case 'Cats':
      return state.categories.cat
    case 'fish':
    case 'Fish':
    case 'fishes':
    case 'Fishes':
      return state.categories.fish
    case 'bird':
    case 'Bird':
    case 'birds':
    case 'Birds':
      return state.categories.bird
    case 'small-animals':
    case 'small animals':
    case 'Small-Animals':
    case 'Small Animals':
      return state.categories.smallAnimal
      
    default: 
      return state.categories.other
    }
  },
  getAmountOfItems: () => (items, amount, start = 0) => {
    if (items.length === amount + 1) {
      return items.slice(start, amount + 1)
    }
    return items.slice(start, amount)
  },
  getRestOfItems: () => (items, amount) => {
    return items.filter((item, i) => i === amount)
  },
  isMobile: state => {
    if (window.innerWidth < state.screens.md) {
      return true
    }
    return false
  },
}