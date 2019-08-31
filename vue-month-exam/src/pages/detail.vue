<template>
  <div>
    <!-- {{
    $route.query
    }}-->
    <div class="info-item">
      <div>
        <span>书名 : {{detail.bookName}}</span>
        &nbsp;
        <span>作者 : {{detail.authorName}}</span>
      </div>
      <br />
      <div>简介 : {{detail.description}}</div>
      <br />
      <span>分类 : {{detail.subCateName}}&nbsp;{{detail.categoryName}}</span>
      <div>
        <button v-if="detail.flag" disabled>已添加</button>
        <button v-else @click="handleClick">+书架</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      detailItem: {}
    };
  },
  created() {
    this.$http({
      url: "/get_detail",
      method: "get",
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      let Index = this.defaultList.findIndex(
        item => item.bookId == res.data.values[0].bookId
      );
      let newData = Object.assign({}, res.data.values[0], {
        flag: res.data.values[0].flag ? res.data.values[0].flag : false
      });
      console.log(res.data.values[0].flag);
      this.detailItem = newData;
      this.changeDetail(newData);
    });
  },
  computed: {
    ...mapState(["detail", "defaultList"])
  },
  methods: {
    ...mapMutations(["addCart", "changeDetail"]),
    handleClick() {
      this.flag = !this.flag;
      console.log(this.detailItem);
      this.detailItem.flag = !this.detail.flag;
      this.changeDetail(this.detailItem);
      this.addCart({ values: this.detail });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>