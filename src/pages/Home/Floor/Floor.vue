<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{ list.name }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li
              class="active"
              v-for="(navlist, index) in list.navList"
              :key="index"
            >
              <a :href="navlist.url" data-toggle="tab">{{ navlist.text }}</a>
            </li>
            <!-- <li>
              <a href="#tab2" data-toggle="tab">大家电</a>
            </li> -->
            <!-- <li>
              <a href="#tab3" data-toggle="tab">生活电器</a>
            </li>
            <li>
              <a href="#tab4" data-toggle="tab">厨房电器</a>
            </li>
            <li>
              <a href="#tab5" data-toggle="tab">应季电器</a>
            </li>
            <li>
              <a href="#tab6" data-toggle="tab">空气/净水</a>
            </li>
            <li>
              <a href="#tab7" data-toggle="tab">高端电器</a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(keyword, index) in list.keywords" :key="index">
                  {{ keyword }}
                </li>
                <!-- <li>4K电视</li>
                <li>空气净化器</li>
                <li>IH电饭煲</li>
                <li>滚筒洗衣机</li>
                <li>电热水器</li> -->
              </ul>
              <img :src="list.bigImg" />
            </div>
            <div class="floorBanner">
              <Carousel :list="list.carouselList"></Carousel>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="list.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["list"],
  mounted() {
    //第一次写swiper 在mouted里面写是不可能的，但是为什么现在这里是可以的
    //第一次写轮播图的是在当前内部发的请求 ，动态渲染结构[前台早上要从服务器拿过来]
    //现在这种写法为什么可以过去，因为数据是从父组件拿过来的
    //    var mySwiper = new Swiper (
    //   this.$refs.floor1Swiper, {
    //   // direction: 'vertical', // 垂直切换选项
    //   loop: true, // 循环模式选项
    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // })
  },
  watch: {
    list:{
      //immediate立即监听 不够数据有没有变化直接监听
      //为什么watch 监听不到list 因为这个数据从来没有变化
      //因为数据是从父组件传递过来
      immediate:true,
      handler(){
        //只能监听到数据已经有了，但是v-for动态渲染结构 我们没办法确定 所以还是要所以nextTick
        this.$nextTick(()=>{

        })
      }
    }
  },
};
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
