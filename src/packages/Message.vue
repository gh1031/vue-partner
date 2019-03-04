<!--
  @name message
  @params 
    * type 消息类型  可选值: info/success/error/warning  默认值: info
    * content 消息文字
    * icon 自定义图标，会覆盖type值
    * customClass 自定义样式
-->
<template>
  <div 
    :class="[
      'p-message',

    ]"
    v-show="visible"
  >
    <slot>
      <i :class="['iconfont', icon]" v-if="icon"></i>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'p-message',
  data() {
    return {
      visible: true,
      type: 'info',
    }
  },
  computed: {
    typeClass() {
      return this.type && !this.icon
    }
  }
}
</script>

