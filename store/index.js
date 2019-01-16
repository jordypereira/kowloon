export const state = () => ({
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
  }
}