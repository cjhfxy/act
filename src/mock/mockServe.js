//先导入 moskjs模块
import Mock from 'mockjs';
//webpack 默认对外暴露 图片 或者json数据 
import banner from './banner.json';

import floor from './floor.json';
//mock数据 第一个请求地址，第二个 请求数据
Mock.mock('/mock/banner',{code:200,data:banner})//模拟轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor})