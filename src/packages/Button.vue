<template>
  <button
    class="p-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "p-button",
  data() {
    return {};
  },
  props: {
    size: {
      type: String,
      default: 'default'
    }
  }
};
</script>

<style lang="scss">

</style>
