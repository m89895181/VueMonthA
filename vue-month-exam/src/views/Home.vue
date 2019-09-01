<template>
  <div class="m-wrap-home">
    <div class="m-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
      </swiper>
    </div>
    <HomeList></HomeList>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import HomeList from "../components/HomeList.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    swiper,
    swiperSlide,
    HomeList
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        autoplay: true
      }
    };
  },
  created() {
    if (!localStorage.getItem("defaultList")) {
      this.getDefault_List();
    }
  },
  computed: {
    ...mapState(["defaultList"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    ...mapActions(["getDefault_List"])
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    //this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="scss" scoped>
.m-wrap-home {
  width: 100%;
  height: 100%;
}
.m-swiper {
  width: 100%;
  height: 150px;
  text-align: center;
  line-height: 150px;
  border-bottom: 1px solid #ccc;
}
</style>