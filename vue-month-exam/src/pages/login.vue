<template>
  <div>
    <label>
      用户名 ：
      <input type="text" id="user" v-model="myUser" />
    </label>
    <label>
      密码 ：
      <input type="text" id="pwd" v-model="myPwd" />
    </label>
    <button @click="handleInput">登录</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      myUser: "",
      myPwd: ""
    };
  },
  computed: {
    ...mapState(["user", "pwd"])
  },
  methods: {
    ...mapMutations(["changeToken"]),
    handleInput() {
      if (this.myUser.trim().length == 0 || this.myPwd.trim().length == 0) {
        console.log("k");
        return;
      }
      console.log(this.myUser, this.myPwd);
      axios({
        url: "/login",
        method: "post",
        data: {
          user: this.myUser,
          pwd: this.myPwd
        }
      }).then(res => {
        if (res.data.code == 200) {
          console.log("token");
          localStorage.setItem("token", JSON.stringify(res.data.values));
          //console.log(res.data.values);
          this.$router.push({
            path: `/home/bookshelf`,
            query: res.data.values
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>