import {reqCategoryList,reqGetBanderList,reqFloorList} from '@/api/index'
const state={
    //数据存放点
    categoryList:[],
    bannerList:[],
    ReqFloorList:[]
}
const mutations={
    //三级菜单数据存
    CATEGORYLiST(state, categoryList){
        state.categoryList=categoryList
    },
    //轮播图数据存储
    GetBannerList(state,getBannerList){
state.bannerList=getBannerList
    },
    //floor 数据
    PetReqFloorList(state,OetBannerList){
        state.ReqFloorList=OetBannerList
    }
}
const actions={
    //三级菜单 发送请求
    async   categoryList({commit}){
     let result=await reqCategoryList()

    if(result.code==200){
    commit('CATEGORYLiST',result.data)
    }
    },
    //轮番图
     async  getBannerList({commit}){
      let result=await reqGetBanderList()
      if(result.code==200){
          commit('GetBannerList',result.data)
      }
    },
    //floor组件
    async GetReqFloorList({commit}){
        let result=await reqFloorList()
        if(result.code==200){
            commit('PetReqFloorList',result.data)
            
        }
    }
    
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}