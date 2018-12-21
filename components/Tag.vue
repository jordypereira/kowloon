<template>
  <div class="tag flex">
    <div class="tag-arrow"></div>
    <div class="tag-body">
      <div v-if="tagColor" class="tag-color" :class="[`bg-${tagColor}`]"></div>
      <div :class="[ !tagColor ? 'tag-name-without-color' : '' ]">{{ tagName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tagName: String,
    tagColor: String,
  },
}
</script>