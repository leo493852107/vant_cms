<template>
  <div id="app">
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
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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

<style>
</style>
