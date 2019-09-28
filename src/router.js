import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import ShopContainer from "./components/tabbar/ShopContainer.vue";
import HotContainer from "./components/tabbar/HotContainer.vue";
import MeContainer from "./components/tabbar/MeContainer.vue";

const router = new VueRouter({
  routes: [
    { path: "/home", component: HomeContainer },
    { path: "/shop", component: ShopContainer },
    { path: "/hot", component: HotContainer },
    { path: "/me", component: MeContainer }
  ]
});

export default router;
