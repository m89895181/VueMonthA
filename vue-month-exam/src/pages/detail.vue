<template>
  <div>
    {{
    $route.query
    }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    console.log(this.$route);
    this.$http({
      url: "/get_detail",
      method: "get",
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      console.log(res.data.values);
      this.detail = res.data.values;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>