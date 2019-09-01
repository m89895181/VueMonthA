<template>
  <div>
    <div class="s-title">尊贵的用户：{{$route.query.user}} 已经登陆</div>
    <div>
      <cart-item v-for="(item,index) in cart" :key="index" :valItem="item"></cart-item>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import cartItem from "../components/cartItem.vue";
export default {
  components: {
    cartItem
  },
  created() {
    let flag;
    if (JSON.parse(localStorage.getItem("cart"))) {
      flag = true;
    } else {
      flag = false;
    }
    if (flag) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
    }
  },
  computed: {
    ...mapState(["cart"])
  }
};
</script>

<style lang="scss" scoped>
</style>