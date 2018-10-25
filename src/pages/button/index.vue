<template>
  <div>

    <div class="row">
      <p-button type="primary" size="small">primary</p-button>
      <p-button type="success" size="small">success</p-button>
      <p-button type="error" size="small">error</p-button>
      <p-button type="warn" size="small">warn</p-button>
      <p-button type="magenta" size="small">warn</p-button>
      <p-button size="small">default</p-button>
    </div>

    <div class="row">
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="error">error</p-button>
      <p-button type="warn">warn</p-button>
      <p-button type="magenta">warn</p-button>
      <p-button>default</p-button>
    </div>
    
    <div class="row">
      <p-button type="primary" size="large" @click="clickBtn" loading>加载中</p-button>
      <p-button type="success" size="large" icon="icon-search">success</p-button>
      <p-button type="error" size="large">error</p-button>
      <p-button type="warn" size="large">warn</p-button>
      <p-button type="magenta" size="large">warn</p-button>
      <p-button size="large">default</p-button>
    </div>

  </div>
</template>

<script>
import Button from '@/packages/Button.vue';

export default {
  name: 'button-page',
  components: {
    'p-button': Button,
  },
  methods: {
    clickBtn($event) {
      console.log($event, '>>')
    }
  }
}
</script>

<style lang="scss">
.row {
  padding: 8px;
  button {
    margin-right: 8px;
  }
}
</style>
