<template>
  <div class="m-home-list">
    <ListItem v-for="(item,index) in defaultList " :key="index" :itemVal="item"></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  props: ["defaultList"],
  components: {
    ListItem
  }
};
</script>

<style lang="scss" scoped>
</style>