<!--
  @name button
  @params 
    * type 按钮类型  可选值: parmary/warn/error/success/magenta/default  默认: defalut
    * size 按钮尺寸  可选值: small/default/large
    * icon 按钮icon 
    * loading 转菊花
    * click 点击事件
-->
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
    :disabled="loading || disabled"
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss">


</style>
