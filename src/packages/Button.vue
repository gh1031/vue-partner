<template>
  <button
    class="p-button"
    :class="[
      type ? 'p-button--' + type : '',
      size ? 'p-button--' + size : '',
      {
        'is-loading': loading,
      }
    ]"
    :disabled="loading"
    @click="handleClick"
  >
    <i class="iconfont" :class="loading && 'icon-loading'"></i>
    <i class="iconfont" :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "p-button",

  props: {
    type: {
      type: String,
      default: 'default',
    },
    size:  {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    handleClick(evt) {
      console.log(evt,'evt')
      console.log(this, 'this')
      this.$emit('click', evt)
    },
    handleMouseOver(evt) {
      this.$emit('mouseover', evt)
    }
  },
  mounted() {
    console.log(this)
    
  },
};
</script>

<style lang="scss">


</style>
