<template>
  <div class="container">

    <div class="row">
      <p-button type="primary" size="small" @click="handleClick">primary</p-button>
      <p-button type="success" size="small" @click="handleClick">success</p-button>
      <p-button type="error" size="small" @click="handleClick">error</p-button>
      <p-button type="warn" size="small" @click="handleClick">warn</p-button>
      <p-button type="magenta" size="small" @click="handleClick">warn</p-button>
      <p-button size="small" @click="handleClick">default</p-button>
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
      <p-button type="primary" size="large" loading>加载中</p-button>
      <p-button type="success" size="large" icon="icon-search">success</p-button>
      <p-button type="error" size="large">error</p-button>
      <p-button type="warn" size="large">warn</p-button>
      <p-button type="magenta" size="large">warn</p-button>
      <p-button size="large">default</p-button>
    </div>
    <div class="row">
      <p-button icon="icon-robot" type="primary" size="small" />
      <p-button icon="icon-setting" type="success" size="small" />
      <p-button icon="icon-search" type="warn" size="small" />
    </div>

    <div class="row">
      <p-button icon="icon-robot" type="primary" />
      <p-button icon="icon-setting" type="success" />
      <p-button icon="icon-search" type="warn" />
    </div>

    <div class="row">
      <p-button icon="icon-robot" type="primary" size="large" />
      <p-button icon="icon-setting" type="success" size="large" />
      <p-button icon="icon-search" type="warn" size="large" />
    </div>

  </div>
</template>

<script>

export default {
  name: 'button-page',
  methods: {
    handleClick($event) {
      console.log('btn clicked');
    }
  },
  mounted() {
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

.container {
  padding: 20px;
}
</style>
