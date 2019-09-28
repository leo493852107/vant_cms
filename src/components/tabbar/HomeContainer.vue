<template>
  <div>
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.image_url" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" :border="false">
      <van-grid-item use-slot v-for="item in grids" :key="item.index" :text="item.name" :to="item.to">
        <template slot="icon">
          <div>
            <img width="60px" height="60px" :src="item.image.url" />
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Toast, Grid, GridItem } from "vant";

// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Grid).use(GridItem);

import instance from "../../lib/myaxios.js";

export default {
  data() {
    return {
      images: [],
      grids: []
    };
  },

  methods: {
    getImageList() {
      instance.get("/1.1/classes/home").then(response => {
        this.images = response.data.results;
      });
    },
    getGridList() {
      instance
        .get("/1.1/classes/home_grid", {
          params: {
            order: "-index"
          }
        })
        .then(response => {
          this.grids = response.data.results;
          console.log(response.data.results);
        });
    }
  },
  created() {
    this.getImageList();
    this.getGridList();
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>