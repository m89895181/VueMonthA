<template>
  <div class="m-home-list-info">
    <router-link :to="{path:'/detail',query:{id:itemVal.bookId}}">{{itemVal.bookName}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["itemVal"]
};
</script>

<style lang="scss" scoped>
</style>