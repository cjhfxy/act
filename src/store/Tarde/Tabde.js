import {reqAddressInfo,reqADDTrade } from '@/api'
const state= {
    address: [],
    orderInfo:{}
}
const mutations = {
    REQADDRESS(state ,address) {
        state.address=address
    },
    GERADDTRADE(state,orderInfo) {
        state.orderInfo=orderInfo
    }
}
const actions = {
    //获取地址
        async getUserAddress({commit}) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('REQADDRESS',result.data)
        }
    },
    //获取交易信息
       async getADDTrade({commit}) {
           let result = await reqADDTrade()
          commit('GERADDTRADE',result.data)
       }
         
}
const getters = {

}



export default {
    state,mutations,actions,getters
}