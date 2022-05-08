import {reqGetSearchInfo} from '@/api'
const state={
    etSearchInfo:{}
}
const mutations={
    GetSearchInfo(state,PetSearchInfo){
            state.etSearchInfo=PetSearchInfo
        }
}
const actions={
  //获取search模块
   async getSearchInfo({commit},params={}){
  let result =await reqGetSearchInfo(params)

if(result.code==200){
    commit('GetSearchInfo',result.data)
}
  }
}
//getters 过滤出仓库里的数据
//state 这个形参 会指向本仓库的state里的数据
//过滤出state里要的数据
const getters={
  goodsList(state){
    return state.etSearchInfo.goodsList;
  },
  trademarkList(state){
    return state.etSearchInfo.trademarkList;
  },
  attrsList(state){
    return state.etSearchInfo.attrsList;
  },
}
export default {
    state,
    mutations,
    actions,
    getters
}


