import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
 import home from './Home/hoindex.js'
import search from './search/search'
import Dateline from './Dateline/index'
import shopcart from "./shopcart/shopcart.js";
import user from './Login/user'
import Tarde from "./Tarde/Tabde.js";
 //state 存数据的地方
//  const state={}
 //mutations //修改stat唯一的手段
//  const mutations={}
 //action 处理action 可以写自己的业务逻辑 也可以处理异步
//  const action={}
 //getters 理解为计算属性 用于简化仓库数据 认组件获取数据更方便
//  const getters={}
 //
export default new Vuex.Store({
    // state,mutations,action,getters
    modules:{
        home,search,Dateline,shopcart,user,Tarde
    }
    
})