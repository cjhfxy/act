//进行第二次封装
import axios from "axios";
//进度条  start 开始 done 结束
import nprogress from "nprogress";
import "nprogress/nprogress.css"
//利用axios对象 create,创建一个axios实例
 const mockRequests=axios.create({
     //配置对象 基础路径 发请求的时候 路径当中出现api
     baseURL:'/mock',
     //代表请求超时时间5000
     timeout:5000
 });
 //请求拦截器
 mockRequests.interceptors.request.use((config)=>{
    //config 配置对象，对象里面有一个属性非常重要 header 请求头
    nprogress.start()
    return config
 });
 //响应拦截器
 mockRequests.interceptors.response.use((res)=>{
// 成功的回调函数,服务器响应数据后 拦截器可以检测到一些数据 可以做一些数据
nprogress.done()
  return res.data
 },(error)=>{
     //响应失败的回调函数
     return Promise.reject(new Error('false'))
 });
//对外暴露axios
export default  mockRequests
