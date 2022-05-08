<template>
  <div>
    <TypeNav></TypeNav>
    <div class="main">
      <div class="py-container">
        <!--bread-->

        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="creaserList.categoryName">
              {{ creaserList.categoryName }}<i @click="removeCategoryName">×</i>
            </li>
            <li class="with-x" v-if="creaserList.keyword">
              {{ creaserList.keyword }}<i @click="removeCategoryWord">×</i>
            </li>
            <li class="with-x" v-if="creaserList.trademark">
              {{ creaserList.trademark }}<i @click="removeCategorytrad">×</i>
            </li>
            <li
              class="with-x"
              v-for="(attr, index) in creaserList.props"
              :key="index"
            >
              {{ attr.split(":")[1]
              }}<i @click="removeCategoryprpos(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @trademarkInfo="trademarkInfo" @attrInfra="attrInfra" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{ active: inOse }">
                  <a href="#" @click="changeOder('1')"
                    >综合<span
                      v-show="inOse"
                      class="iconfont"
                      :class="{
                        'icon-download': isAsc,
                        'icon-arrowup': isDesc,
                      }"
                    ></span
                  ></a>
                </li>
                <li :class="{ active: inOsr }" @click="changeOder('2')">
                  <a href="#"
                    >销量<span
                      v-show="inOsr"
                      class="iconfont"
                      :class="{
                        'icon-download': isAsc,
                        'icon-arrowup': isDesc,
                      }"
                    ></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <!-- 图片 -->
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(good, index) in goodsList"
                :key="good.id"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/Dateline/${good.id}`">
                      <img v-lazy="good.defaultImg" />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" :title="good.title">
                      {{ good.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Pagination
            :pageNo="creaserList.pageNo"
            :pageSize="creaserList.pageSize"
            :total="total"
            :continues="5"
            @getPageNo="getPageNo"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SearchSelector from "./SearchSelector/SearchSelector";

export default {
  data() {
    return {
      creaserList: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        //产品的名字
        categoryName: "",
        //搜索的关键字
        keyword: "",
        //排序:初始状态应该是综合且降序
        order: "1:asc",
        //第几页
        pageNo: 2,
        //每一页展示条数
        pageSize: 3,
        //平台属性的操作
        props: [],
        //品牌
        trademark: "",
      },
    };
  },
  props: ["keyword"],
  components: {
    SearchSelector,
  },
  methods: {
    //向服务器发送请求获取serch模块获取数据（根据参数不同返回不同参数）
    getDate() {
      this.$store.dispatch("getSearchInfo", this.creaserList);
    },
    //删除
    removeCategoryName() {
      this.creaserList.category1Id = undefined;
      this.creaserList.category2Id = undefined;
      this.creaserList.category3Id = undefined;
      this.creaserList.categoryName = undefined;
      this.getDate();
      if (this.$route.params) {
        //地址需要修改 进行路由 但是没必要删除 路由挑转 带着目前的params 过去就行
        this.$router.push({ name: "search", params: this.$route.params });
      }
    },
    //删除keyword
    removeCategoryWord() {
      this.creaserList.keyword = undefined;
      this.getDate();
      this.$bus.$emit("clear");
      if (this.$route.query)
        this.$router.push({ name: "search", query: this.$route.query });
    },
    trademarkInfo(tradList) {
      this.creaserList.trademark = `${tradList.tmId}:${tradList.tmName}`;
      this.getDate();
    },
    removeCategorytrad() {
      this.creaserList.trademark = "";
      this.getDate();
    },
    //买卖属性  //收集平台属性回调函数
    attrInfra(attr, attrValue) {
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`;
      //判断数组去重 不然一直点买卖属性 他会一直增加
      if (this.creaserList.props.indexOf(props) == -1) {
        this.creaserList.props.push(props);
      }

      this.getDate();
    },
    //买卖点击事件
    removeCategoryprpos(index) {
      this.creaserList.props.splice(index, 1);
      this.getDate();
    },
    //图标上下切换
    changeOder(flog) {
      let originOrder = this.creaserList.order;
      //先清除数组里面的字符串
      let originFlag = this.creaserList.order.split(":")[0];
      let originSort = this.creaserList.order.split(":")[1];
      //如果flog 与originFiag 相等 就一定是综合
      let newOrdIn = "";
      if (flog == originFlag) {
        newOrdIn = `${originFlag}:${originSort == "desc" ? "asc" : "desc"}`;
      } else {
        newOrdIn = `${flog}:${originSort == "desc" ? "asc" : "desc"}`;
      }
      this.creaserList.order = newOrdIn;
      this.getDate();
    },
    //分页器
    getPageNo(pageNo) {
      this.creaserList.pageNo = pageNo;
      this.getDate();
    },
  },
  //生命周期 当组件挂载完成之前 执行一次 优先级高于mounted
  beforeMount() {
    //es7拷贝
    Object.assign(this.creaserList, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getDate();
  },

  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
      total: (state) => state.search.etSearchInfo.total,
    }),
    inOse() {
      return this.creaserList.order.indexOf("1") !== -1;
    },
    inOsr() {
      return this.creaserList.order.indexOf("2") !== -1;
    },
    isAsc() {
      return this.creaserList.order.indexOf("asc") !== -1;
    },
    isDesc() {
      return this.creaserList.order.indexOf("desc") !== -1;
    },
  },
  watch: {
    $route(newValut, oldValue) {
      Object.assign(this.creaserList, this.$route.query, this.$route.params);
      this.getDate();
      // 因为tabnav 只能点一次 生命周期就结束了
      //只能放在监听 在监听上一直监听事件改变
      //而且每一次点击id会一直留下来 不会改变
      //只能在监听前吧id清了
      this.creaserList.category1Id = undefined;
      this.creaserList.category2Id = undefined;
      this.creaserList.category3Id = undefined;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
