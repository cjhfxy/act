import {getGoryDateline,reqAddOrUpdateShopCart,reqUserInfo} from '@/api'
import {getUUID} from '@/utils/uuid.token'
const state={
    goodInfo: {},
    uuid_token:getUUID()
}
const mutations={
    getGoryDateline(state,goodInfo){
        state.goodInfo=goodInfo
    }
}
const actions={
    async reqGoryDateline({commit},skuId){
        let serult =await getGoryDateline(skuId)
       if(serult.code ==200){
           commit('getGoryDateline',serult.data)
       }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
        //不需要在三连环（仓库存储数据了）
        //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if(result.code==200){
            return
        }else {
        return Promise.reject(new Error('false'))
        }
    }
} 
const getters={
    categoryView(){
        return state.goodInfo.categoryView || []
    },
    skuInfo(){
       return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default{
    state,mutations,actions,getters
}