import Vue from 'vue'
import App from './App.vue'
//三级菜单
import TypeNav from '@/components/Typenav/sjlx.vue'
import Carousel from '@/components/Carouse/index.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.component('Carousel',Carousel)
Vue.config.productionTip = false
Vue.use(ElementUI);
//测试接口
 import{ reqCategoryList }from '@/api';
 reqCategoryList()
 //导入仓库
 import store from '@/store'
 //导入mock数据模拟
 import '@/mock/mockServe.js'
 //导入轮播
 import 'swiper/css/swiper.css'
Vue.component('TypeNav',TypeNav )
import router from "@/components/router";
//分页器
import Pagination from '@/components/Pagination/index.vue'
Vue.component('Pagination', Pagination)
import * as API from '@/api/index'
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/logo.png',
  loading: './assets/images/logo.png',
  attempt: 1
})
import '@/plugins/validate.js'
  new Vue({ 
  //全局事件$bus配置
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API
   },router,store
}).$mount('#app')
