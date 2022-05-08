<template>
  <div>
    <Headers></Headers>
    <router-view></router-view>
    <!-- 判断目前路由是不是这两个路由之间 不是则隐藏这个组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Headers from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Headers,
    Footer,
  },
  mounted() {
    //只使用一次请求 三级菜单数据
    this.$store.dispatch("categoryList");
    this.$store.dispatch("getUserIn");
  },
};
</script>

<style></style>
