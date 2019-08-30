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
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#app,
html,
body {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
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
  .router-link-active {
    color: yellow;
  }
}
</style>
