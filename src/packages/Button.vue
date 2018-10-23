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
.p-button {
  outline: 0;
  padding: 4px 15px;
  border-radius: 4px;
  color: #fff;
  font-weight: 400;
  border-color: #f5222d;
  background-color: #f5222d;
  &:hover {
    border-color: #ff4d4f;
    background-color: #ff4d4f;
  }
}
</style>
