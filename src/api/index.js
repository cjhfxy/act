//当前模块 api进行统一管理
import  requests from './request'
import mockRequests from './mockKAjax'
import { refreshStyles } from 'less';



//三级菜单 接口
export  const reqCategoryList=()=>{
 return requests({url:'/product/getBaseCategoryList',method:'get'})}
 //获取轮番图 mock假数据
 export const reqGetBanderList=()=>{
    return mockRequests.get('/banner')
 };
 export const reqFloorList=()=>{
   return mockRequests.get('/floor')
};
//获取搜索商品模块数据/api/list 请求方式POST
//需要端请求参数
export const reqGetSearchInfo=(params)=>{
   return requests({url:'/list',method:'post',data:params})}
//商品详情
export const getGoryDateline=(skuId)=>{return requests({url:`/item/${skuId}`,method:'get'})}
///api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
///api/cart/cartList
export const reqCarlist = () => 
{ return requests({ url: '/cart/cartList', method: 'get' }) }
///cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});
///api/cart/checkCart/{skuID}/{isChecked}
// export const reqUpdateCheckedByid = (skuId,isChecked) => requests({ url: `/cart/checkCart/${skuId}:${isChecked}`, method: 'get' })
 export const reqUpdateCheckedByid =(skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });
//获取验证码/api/user/passport/sendCode/{phone}
export const reqGetCode =(phone)=> requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//添加用户/api/user/passport/register
export const reqUserRegister=(data)=>requests({url:'/user/passport/register',method:'post',data})
//登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', method: 'post', data })
//获取用户信息
//http://182.92.128.115/api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })
//退出登录i/user/passport/logout
export const eqUserLogout = () => {
   return requests({ url:'/user/passport/logout',method:'get'
})
}
//用户地址/api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });
///api/order/auth/trade
export const reqADDTrade = () => requests({ url: '/order/auth/trade', method: 'get' })
//提交 订单 i/order/auth/submitOrder?tradeNo={tradeNo}
export const reqUserPay = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data })
//获取订单支付信息 /payment/weixin/createNative/{orderId}
export const reqWeixin = (orderId) => requests({ url: `/payment/weixin//createNative/${orderId}`, method: 'get' })
///api/payment/weixin/queryPayStatus/{orderId}
export const reqWeixojQueru = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })
///api/order/auth/{page}/{limit}
export const reqAuthPage = (page,limit) => requests({ url:`/order/auth/${page}/${limit}`,method:'get'})