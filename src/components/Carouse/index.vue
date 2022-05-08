<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(caroulist,index) in list"
        :key="caroulist.id"
      >
        <img :src="caroulist.imgUrl" />
      </div>
      <!-- <div class="swiper-slide">
                                            <img src="./images/floor-1-b02.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/floor-1-b03.png">
                                        </div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
    props:['list'],
    watch:{
        list:{
            immediate:true,
            handler(){
                this.$nextTick(()=>{
                      var mySwiper = new Swiper (
                          this.$refs.floor1Swiper, {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
       clickable: true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })      
                })
            }
        }
    }
};
</script>

<style></style>
