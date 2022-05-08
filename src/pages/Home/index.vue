<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rink></Rink>
    <Link></Link>
    <Floor
      v-for="(floor, index) in ReqFloorList"
      :key="floor.id"
      :list="floor"
    ></Floor>

    <Bared></Bared>
  </div>
</template>

<script>
//列表组件
import ListContainer from "@/pages/Home/lb/lb.vue";
//今日推荐
import Recommend from "@/pages/Home/jrtj/jrtj.vue";
//推荐手机模块
import Rink from "@/pages/Home/Rink/Rink.vue";
//猜你喜欢
import Link from "@/pages/Home/like/like.vue";
//推荐电器模块
import Floor from "@/pages/Home/Floor/Floor.vue";
//logo
import Bared from "@/pages/Home/Brand/Barend.vue";
import { mapState } from "vuex";

export default {
  components: {
    ListContainer,
    Recommend,
    Rink,
    Link,
    Floor,
    Bared,
  },
  computed: {
    ...mapState({ ReqFloorList: (state) => state.home.ReqFloorList }),
  },
  mounted() {
    this.$store.dispatch("GetReqFloorList");
    this.$store.dispatch("getUserIn");
  },
};
</script>

<style></style>
