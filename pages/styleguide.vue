<template>
  <div class="container my-12 mb-32">
    <h1 class="title mb-4">Style Guide</h1>

    <!-- Colors -->
    <h2 class="section-title my-4">Colors</h2>
    <p>Any of these colors can be used as text or bg colors with .text-color and .bg-color</p>
    <div class="flex flex-wrap my-4">
      <div class="p-4" v-for="color in Object.keys(colors)" :key="color">
        <h3 class="text-center">{{ color }}</h3>
        <div class="h-32 w-32 rounded-lg relative" :class="`bg-${color}`">
          <div class="absolute w-full h-full flex justify-center items-center">{{ colors[color] }}</div>
        </div>
      </div>
    </div>
    <!-- Typography -->
    <h2 class="section-title my-4">Typography</h2>
    <p>To make it uppercase add .uppercase</p>
    <div class="flex flex-wrap my-4">
      <div class="p-4">
        <h1 class="title uppercase">title</h1>
      </div>
      <div class="p-4">
        <h1 class="section-title uppercase">section-title</h1>
      </div>
      <div class="p-4">
        <h1 class="sub-title">sub-title</h1>
      </div>
      <div class="p-4">
        <h1 class="category-title">category-title</h1>
      </div>
      <div class="p-4">
        <h1 class="faq-title">faq-title</h1>
      </div>
      <div class="p-4">
        <h1 class="price">price</h1>
      </div>
      <div class="p-4">
        <h1 class="text-newsletter">text-newsletter</h1>
      </div>
      <div class="p-4">
        <h1 class="product-description">product-description</h1>
      </div>
    </div>
    <!-- Card Sizes -->
    <h2 class="section-title mb-4">Cards</h2>
    <p>A card takes in an img, img-alt, name, price, description, category and a hoverframe. You can then add a size to it.</p>
    <div class="flex flex-wrap my-4">
      <div>
        <h3 class="sub-title mb-3">Card Small</h3>
        <Card
          :img="dogCoolingMat"
          imgAlt="Dog cooling mat"
          name="Dog cooling mat"
          price="14"
          :category="{ color: 'pink'}"
          sm
          class="px-4"
        ></Card>
      </div>
      <div>
        <h3 class="sub-title mb-3">Card Medium</h3>
        <Card
          :img="dogCoolingMat"
          imgAlt="Dog cooling mat"
          name="Dog cooling mat"
          price="14"
          :category="{ color: 'pink'}"
          hoverFrame="details"
          md
          class="px-4"
        >
          <ProductColors class="absolute pin-t pin-l m-10px" :colors="['blue', 'black']"/>
        </Card>
      </div>
      <div>
        <h3 class="sub-title mb-8">Card Stacked</h3>
        <Card
          :img="dogCoolingMat"
          imgAlt="Dog cooling mat"
          name="Dog cooling mat"
          price="14"
          :category="{ color: 'pink'}"
          hoverFrame="details"
          md
          stacked
          class="px-4"
        >
          <ProductColors class="absolute pin-t pin-l m-10px" :colors="['blue', 'black']"/>
        </Card>
      </div>
      <div>
        <h3 class="sub-title mb-3">Card Large</h3>
        <Card
          :img="dogCoolingMatLarge"
          imgAlt="Dog cooling mat"
          name="Dog cooling mat"
          description="this is a long description. this is a long description. this is a long description. this is a long description."
          price="14"
          :category="{ color: 'pink'}"
          hoverFrame="details"
          lg
          class="px-4"
        >
          <ProductColors class="absolute pin-t pin-l m-10px" :colors="['blue', 'black']"/>
        </Card>
      </div>
    </div>
    <!-- Tags -->
    <h2 class="section-title my-4">Tags</h2>
    <p>A tag takes a name and a color in. If no color is provided, it provides extra whitespace.</p>
    <div class="flex flex-wrap my-4">
      <Tag tagName="Dogs" tagColor="pink" class="px-1"/>
      <Tag tagName="Cats" tagColor="indigo" class="px-1"/>
      <Tag tagName="Cats" class="px-1"/>
    </div>
    <!-- Buttons -->
    <h2 class="section-title my-4">Buttons</h2>
    <p>You can give the button any colors with the classes bg-color and text-color.</p>
    <div class="flex flex-wrap my-4">
      <div class="px-4">
        <h3>Button Small</h3>
        <button class="btn btn-sm bg-green">Want to know more?</button>
      </div>
      <div class="px-4">
        <h3>Button Medium</h3>
        <button class="btn btn-md bg-orange mt-6">ok, verder surfen</button>
      </div>
      <div class="px-4">
        <h3>Button Input</h3>
        <button class="btn-input" aria-label="Signs you up for the news letter.">OK</button>
      </div>
      <div class="px-4">
        <h3>Button</h3>
        <button class="btn btn-primary" aria-labelledby="Sends your message to us.">Send</button>
      </div>
    </div>
    <!-- Dividers -->
    <h2 class="section-title my-4">Dividers</h2>
    <div class="flex flex-wrap my-4">
      <div class="px-4">
        <h3>Divider Vertical</h3>
        <div class="divider-vertical bg-white"></div>
      </div>
      <div class="px-4">
        <h3>Divider Horizontal</h3>
        <hr class="divider bg-white">
      </div>
    </div>
    <!-- Icons -->
    <h2 class="section-title my-4">Icons</h2>
    <p>You can use an icon with .icon and .icon-name. You can color them using .bg-color</p>
    <div class="flex flex-wrap my-4">
      <div class="px-4">
        <h3>Icon k</h3>
        <i class="flex icon icon-k"></i>
      </div>
      <div class="px-4">
        <h3>Icon k-full</h3>
        <i class="flex icon icon-k-full"></i>
      </div>
      <div class="px-4">
        <h3>Icon kowloon</h3>
        <i class="flex icon icon-kowloon"></i>
      </div>
      <div class="px-4">
        <h3>Icon hamburger</h3>
        <i class="flex icon icon-hamburger"></i>
      </div>
      <div class="px-4">
        <h3>Icon x-close</h3>
        <i class="flex icon icon-x-close"></i>
      </div>
      <div class="px-4">
        <h3>Icon search</h3>
        <i class="flex icon icon-search"></i>
      </div>
      <div class="px-4">
        <h3>Icon faq</h3>
        <i class="flex icon icon-faq"></i>
      </div>
      <div class="px-4">
        <h3>Icon mail</h3>
        <i class="flex icon icon-mail"></i>
      </div>
      <div class="px-4">
        <h3>Icon loader</h3>
        <i class="flex icon icon-loader"></i>
      </div>
      <div class="px-4">
        <h3>Icon arrow prev</h3>
        <i class="flex icon icon-arrow icon-arrow-prev bg-white"></i>
      </div>
      <div class="px-4">
        <h3>Icon arrow next</h3>
        <i class="flex icon icon-arrow icon-arrow-next bg-white"></i>
      </div>
      <div class="px-4">
        <h3>Icon sort</h3>
        <i class="flex icon icon-sort"></i>
      </div>
      <div class="px-4">
        <h3>Icon cookie</h3>
        <i class="flex icon icon-cookie"></i>
      </div>
      <div class="px-4">
        <h3>Icon crumble</h3>
        <i class="flex icon icon-crumble"></i>
      </div>
      <div class="px-4">
        <h3>Icon break</h3>
        <i class="flex icon icon-break"></i>
      </div>
      <div class="px-4">
        <h3>Icon clear</h3>
        <i class="flex icon icon-clear"></i>
      </div>
      <div class="px-4">
        <h3>Icon dog</h3>
        <i class="flex icon icon-dog"></i>
      </div>
      <div class="px-4">
        <h3>Icon dog large</h3>
        <i class="flex icon icon-dog icon-large"></i>
      </div>
      <div class="px-4">
        <h3>Icon cat</h3>
        <i class="flex icon icon-cat"></i>
      </div>
      <div class="px-4">
        <h3>Icon cat large</h3>
        <i class="flex icon icon-cat icon-large"></i>
      </div>
      <div class="px-4">
        <h3>Icon fish</h3>
        <i class="flex icon icon-fish"></i>
      </div>
      <div class="px-4">
        <h3>Icon fish large</h3>
        <i class="flex icon icon-fish icon-large"></i>
      </div>
      <div class="px-4">
        <h3>Icon bird</h3>
        <i class="flex icon icon-bird"></i>
      </div>
      <div class="px-4">
        <h3>Icon bird large</h3>
        <i class="flex icon icon-bird icon-large"></i>
      </div>
      <div class="px-4">
        <h3>Icon small-animal</h3>
        <i class="flex icon icon-small-animal"></i>
      </div>
      <div class="px-4">
        <h3>Icon small-animal large</h3>
        <i class="flex icon icon-small-animal icon-large"></i>
      </div>
      <div class="px-4">
        <h3>Icon other</h3>
        <i class="flex icon icon-other"></i>
      </div>
    </div>
    <!-- Sliders -->
    <h2 class="section-title my-4">Sliders</h2>
    <div class="flex flex-wrap my-4">
      <div class="px-4 w-3/5">
        <h3>Big Slider</h3>
        <HomeSlider :images="homeSliderImages"/>
      </div>
      <div class="px-4 w-3/5">
        <h3>Mini Slider</h3>
        <MiniSlider class="mb-4" url="/products/dog/detail`"/>
      </div>
      <div class="px-4 w-3/5">
        <h3>Related Products Slider</h3>
        <RelatedProducts :category="category" :url="`/products/${category.name}/details`" arrows/>
      </div>
    </div>
    <!-- Forms -->
    <h2 class="section-title my-4">Forms</h2>
    <div class="flex flex-wrap my-4">
      <div class="px-4">
        <h3>Checkboxes</h3>
        <BaseFormCheckboxes :items="itemsCheckbox" color="yellow"/>
      </div>
      <div class="px-4">
        <h3>Range Slider</h3>
        <vue-slider ref="slider" v-bind="rangeSliderOptions" v-model="price"></vue-slider>
      </div>
      <div class="px-4">
        <h3>Range Inputs</h3>
        <BaseFormInputRange
          :minPrice.sync="price[0]"
          :maxPrice.sync="price[1]"
          class="flex justify-between md:justify-start w-full mt-4 md:mt-0"
        />
      </div>
      <div class="px-4">
        <h3>Select Box</h3>
        <SelectBox :options="sortOptions" v-model="sort" placeholder="Sort by relevance"/>
      </div>
    </div>
    <!-- Links -->
    <h2 class="section-title my-4">Links</h2>
    <div class="flex flex-wrap my-4">
      <div class="px-4">
        <a href="#" class="section-link">section-link</a>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/cards/Card'
import ProductColors from '@/components/product/ProductColors'
import Tag from '@/components/Tag'
import HomeSlider from '@/components/HomeSlider'
import MiniSlider from '~/components/product/MiniSlider'
import BaseFormCheckboxes from '@/components/forms/BaseFormCheckboxes'
import BaseFormInputRange from '@/components/forms/BaseFormInputRange'
import SelectBox from '@/components/SelectBox'
import RelatedProducts from '~/components/product/RelatedProducts'


import dogCoolingMat from '@/assets/images/products/dog_cooling_mat--thumbnail.png'
import dogCoolingMatLarge from '@/assets/images/products/dog_cooling_mat.jpg'
import homeSliderImages from '@/services/homeSliderImages'
import itemsCheckbox from '@/services/productOptions'

export default {
  name: 'Styleguide',
  components: {
      Card,
      ProductColors,
      Tag,
      MiniSlider,
      HomeSlider,
      BaseFormCheckboxes,
      BaseFormInputRange,
      SelectBox,
      RelatedProducts,
  },
  data() {
    return {
      dogCoolingMat,
      dogCoolingMatLarge,
      homeSliderImages,
      itemsCheckbox,
      rangeSliderOptions: {
        width: '100%',
        height: 4,
        dotSize: 18,
        min: 1,
        max: 100,
        interval: 0.01,
        useKeyboard: true,
        tooltip: 'false',
        enableCross: false,
        bgStyle: {
          backgroundColor: '#fff',
        },
        processStyle: {
          backgroundColor: '#9a9a9a'
        }
      },
      price: [1, 100],
      sort: {},
      sortOptions: [
        {
          id: 1,
          name: 'Price: low to high',
          value: 'priceLow',
        },
        {
          id: 2,
          name: 'Price: high to low',
          value: 'priceHigh',
        },
        {
          id: 3,
          name: 'Latest',
          value: 'latest',
        },
        {
          id: 4,
          name: 'Oldest',
          value: 'oldest',
        },
      ],
      colors: {
        'transparent': 'transparent',

        'black-darker': '#252525',
        'black-dark': '#282828',
        'black-dark2': '#2b2b2b',
        'black': '#323232',
        'black-light': '#313131',
        'grey-900': '#454545',
        'grey-800': '#565656',
        'grey-750': '#535353',
        'grey-700': '#5f5f5f',
        'grey-650': '#616161',
        'grey-600': '#828282',
        'grey-550': '#818181',
        'grey': '#717171',
        'grey-400': '#a2a2a2',
        'grey-300': '#9a9a9a',
        'grey-200': '#cecece',
        'grey-100': '#cfcfcf',
        'grey-75': '#e9e9e9',
        'grey-50': '#f6f6f6',
        'white': '#ffffff',

        'orange': '#e27500',

        'beige-dark': '#b8aa91',
        'beige': '#e6cfb9',

        'yellow': '#ffb93f',

        'green': '#38c172',
        'green-light': '#7bff81',

        'blue': '#2d4aac',
        'blue-light': '#7be5ff',

        'indigo': '#8787ff',

        'pink': '#ff6f9e',
      },
      category: {
        name: 'Dogs',
        shortName: 'Dog',
        color: 'pink',
      },
    }
  },
}
</script>