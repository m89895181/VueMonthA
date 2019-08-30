<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},

  methods: {}
};
</script>
<style lang="scss">
#app,
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.m-title {
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
  .tit-inside {
    flex: 1;
    text-align: center;
  }
  &.router-link-exact-active {
    color: yellow;
  }
}
</style>
