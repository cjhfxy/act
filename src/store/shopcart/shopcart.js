import {reqCarlist,reqDeleteCartById,reqUpdateCheckedByid} from '@/api'

const state = {
    cartList:[]
}
const mutations = {
    GETCRTLIST(state,cartList) {
        state.cartList=cartList
    }
}
const actions = {
    //获取购物车列表数据
 async   getCartList({commit}) {
        let result = await reqCarlist() 
        if (result.code == 200) {
            commit('GETCRTLIST', result.data)  
        }
    },
    //删除购物车
    async getDelect({ commit},skuId) {
      let result = await reqDeleteCartById(skuId)
    
    },
    //修改购物车
    async upDateCheckebById({ commit }, { skuId,isChecked }) {
        let result = await reqUpdateCheckedByid(skuId,isChecked)
        if (result.code == 200){
            return 'ok'
        } else {
            return 'false'
        }
    } ,  
    deleteAllCheck({ dispatch, getters }) {
        let PromiseAll=[]
        let promise = getters.cartList.cartInfoList.forEach(item => {
            item.isChecked == 1 ? dispatch('getDelect', item.skuId) : ''
            PromiseAll.push(promise)
        })
        return PromiseAll.add(PromiseAll)
    },
    updateAllCareIsCheckeb({ dispatch, state }, isChecked) {
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('upDateCheckebById', {
                skuId: item.skuId,
                isChecked
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    cartInfoList(state) {
        return state.cartList.cartInfoList
    }
}
export default {
    state,mutations,actions,getters

}