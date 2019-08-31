<template>
  <div class="m-home-list">
    <ListItem v-for="(item,index) in defaultList " :key="index" :itemVal="item"></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    ListItem
  },
  computed: {
    ...mapState(["defaultList"])
  }
};
</script>

<style lang="scss" scoped>
</style>