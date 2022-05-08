import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo,eqUserLogout} from '@/api'
import { setToken,getToken,remoeToken } from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo:{}
}
const mutations = {
    GETCODE(state,code) {
        state.code=code
    },
    USERLOGIN(state,token) {
        state.token=token
    },
    GETUSERINFO(state,userInfo) {
        state.userInfo=userInfo
    },
    GETLOGING(state) {
        state.token = ''
        state.userInfo = {}
        remoeToken()
    }
}
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
        commit('GETCODE',result.data) 
     }
    },
    //用户注册
 async   userRegister({commit},user) {
     let result   = await reqUserRegister(user)
    },
 //登录
  async  eqUserLogin({ commit }, data) {
        let result = await reqUserLogin(data)
      if (result.code == 200) {
          commit("USERLOGIN", result.data.token)
        setToken(result.data.token);
          }
    },
    async getUserIn({commit}) {
        let result = await reqUserInfo()
    
        if (result.code == 200) {
           commit('GETUSERINFO',result.data)
       }
    },
    //退出
    async getUserLogin({commit}) {
        let result = await eqUserLogout()
        if (result.code == 200) {
            commit('GETLOGING')
        }
    }
}
const getters = {
    
}
export default {
    state ,mutations ,actions,getters
}