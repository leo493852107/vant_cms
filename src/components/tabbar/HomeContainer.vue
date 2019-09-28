<template>
  <div>
    <van-swipe @change="onChange" :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Toast } from "vant";

// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);

import instance from "../../lib/myaxios.js";

export default {
  data() {
    return {
      images: []
    };
  },

  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index);
    },
    getImageList() {
      instance.get("1/classes/home").then(response => {
        this.images = response.data.results;
        Toast("加载轮播图成功");
      });
    }
  },
  created() {
    this.getImageList();
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>