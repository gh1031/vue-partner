<template>
  <div id="app">
    <header></header>
    <section class="content">
      <aside>
        <ul>
          <li><router-link to="/p-button">Button</router-link></li>
          <li><router-link to="/p-message">Message</router-link></li>
        </ul>
      </aside>
      <section>
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  background: url(./assets/bg.jpeg) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  header {
    width: 100%;
    height: 48px;
    background-color: #262626;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    aside {
      width: 200px;
      height: 100%;
      background-color: #262626;

      li {
        border-color: #595959;
        background-color: #595959;
        text-align: center;
        font-weight: bold;
        line-height: 48px;
        margin-bottom: 4px;

        > a {
          color: #FFF;
          display: block
        }

        &:hover {
          background-color: #8c8c8c;
          border-color: #8c8c8c;
        }
      }
    }

    > section {
    }
  }
}
</style>
