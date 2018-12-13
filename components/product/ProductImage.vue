<template>
  <div class="product__image">
    <div class="product__image--selected">
      <img src alt="Highlighted Image">
      <div class="product__image__gallery">
        <div v-for="i in 3" :key="i" class="product__image__gallery--item">
          <img src :alt="`Image ${i}`">
          <p>woordje tekst</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.product__image {
  max-width: 500px;
  background-color: #555;
  margin-right: 30px;
}
.product__image__gallery {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>

