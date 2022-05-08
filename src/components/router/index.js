import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";

import Trade from '@/pages/Trade'
import store from '@/store'
import pay from '@/pages/Pay/index.vue'
import Home from '@/pages/Home/index.vue'
Vue.use(VueRouter)
//要先将router的原型对象 读取出来 交给 拦截器判断
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
    //call 跟apply的区别
    //共同点 都可以调用函数，修改函数上下文
    //不同点 call传递参数用 ,隔开 apply只能传递数组
 if(resolve&&reject){
     //ture 就是正常运行
    originPush.call(this,location,resolve,reject)
    
 }else {
     //判断是否push 是不是true 如果false 就抛出异常 但没办法根除 只能抛出 不报错
    originPush.call(this,location,()=>{},()=>{})
 }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resole &&reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// VueRouter.prototype.replace=function(location,resolve,reject){
//     if(resolve&&reject){
//         return originReplace.call(this,)
//     }
// }
 const  router=  new VueRouter({
     //meta 开启绑定show 传入值是否 
     //name 绑定编程导航 props 开启路由传递 
     //:keyword 绑定传过来的值 ？ 表示可以传递空值
    routes:[
         { path: '/', redirect: '/Home' },
      
         {
             path: '/center', component: ()=> import('@/pages/Center')
             , meta: { show: true },
             
             children: [
                 { path: 'myorder', component: () => import('@/pages/Center/myOrder/myOrder.vue') },
                   { path:'/center',redirect:'/center/myorder'},
                 {path:'goorder',component: () => import('@/pages/Center/groupOreder/index.vue')}
         ]},
        { path:'/paysuccess', component:() => import('@/pages/PaySuccess') , meta:{show:true}},
        { path:'/Home', component:Home , meta:{show:true}},
        { path:'/search/:keyword?', component:() => import('@/pages/search/index.vue'),meta:{show:true},
       name:"search", props:true},
        {path:'/Login', component:() =>import ( '@/pages/Login') ,meta:{show:false}}
        , { path:'/Register', component:() => import('@/pages/Register'),meta:{show:false}},
         { path: '/Dateline/:skuid', component:() => import( '@/pages/Detail路由组件_静态/Detail/index.vue'), meta: { show: false }, }
         , {
             path: '/AddCarSuccess', component: () => import( '@/pages/AddCartSuccess') , meta: { show: false },
             name: 'AddCarSuccess'  
         },
         {
             path: '/ShopCart', component: ()=>import('@/pages/ShopCart/index.vue'), meta: { show: false },
             name: 'AShopCart'
         },
            {
             path: '/Trade', component: Trade, meta: { show: false },
                name: 'Trade',
                beforeRouteUpdate(to,from) {
                    if (from.path == '/ShopCart') {
                     return true
                    } else {
                    return false
                 }
              }
         },
        {path:'/pay',component:pay,name:pay}
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
 })
router.beforeEach( async(to, from, next) => {
   
    let token = store.state.user.token
    let name =store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/Home')
        } else {
            next()
        }
    } else {
        let topath=to.path
        if (topath.indexOf('AddCarSuccess') != -1 || topath.indexOf('pay')!=-1 || topath.indexOf('cente')!=-1) {
          next('/login?redirect+' +topath)
        } else {
            next()
      }
      
    }
})
export default router 