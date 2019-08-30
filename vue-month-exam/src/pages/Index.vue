<template>
  <div>
    <div class="m-title">
      <div class="tit-inside" v-for="(item) in list" :key="item.id">
        <router-link :to="{path:item.to}">{{item.name}}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "首页", id: 1, to: "/home/index" },
        { name: "分类", id: 2, to: "/home/classification" },
        { name: "排行", id: 3, to: "/home/ranking" },
        { name: "书架", id: 4, to: "/home/bookshelf" }
      ],
      currentIndex: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: red;
}
</style>