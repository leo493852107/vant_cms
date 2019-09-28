<template>
  <div id="app" class="app-container">
    <!-- nav bar -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- tabbar -->
    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home-o" dot>主页</van-tabbar-item>
      <van-tabbar-item replace to="/shop" icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/hot" icon="hot-sale-o">HOT</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="user-circle-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import "./lib/vant.index.css";
import { Tabbar, TabbarItem, NavBar, Toast } from "vant";

Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Toast);

export default {
  data() {
    return {
      active: 0
    };
  },
  name: "app",
  components: {},
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  // padding-top: 40px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
</style>
