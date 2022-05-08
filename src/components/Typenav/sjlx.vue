<template>
  <div class="type-nav">
    <!-- 判断鼠标是不是离开了这个模块 -->
    <div class="container" @mouseenter="antreShow" @mouseleave="enterShow">
      <h2 class="all">全部商品分类</h2>
      <transition name="sort">
        <!-- 三级菜单 -->
        <!-- 利用编程导航 加事件委托解决 -->
        <div class="sort" v-show="show" @mouseleave="leaveIndex">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              :class="{ cur: currentIndex == index }"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
            >
              <!-- changeIdex(index) 鼠标进入那个index 就把那个index 颜色 -->
              <h3 @mouseenter="changeIdex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
                <!-- 声明导航 渲染页面不像a连接那样 只能循环出一次 而是每一个数据循环一次 导致循环太多了 造成卡顿 -->
                <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              </h3>
              <!-- 二 三菜单 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <!-- <div class="item">
                            <h3>
                                <a href="">家用电器</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书1</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">手机、数码、充值</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">充值</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="recharge.html">充值</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书2</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">电脑、办公</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书3</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>教育</dt>
                                        <dd>
                                            <em>
                                                <a href="">教材教辅</a>
                                            </em>
                                            <em>
                                                <a href="">考试</a>
                                            </em>
                                            <em>
                                                <a href="">外语学习</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>其它</dt>
                                        <dd>
                                            <em>
                                                <a href="">英文原版书</a>
                                            </em>
                                            <em>
                                                <a href="">港台图书</a>
                                            </em>
                                            <em>
                                                <a href="">工具书</a>
                                            </em>
                                            <em>
                                                <a href="">套装书</a>
                                            </em>
                                            <em>
                                                <a href="">杂志/期刊</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">家居、家具、家装、厨具</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书4</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">服饰内衣</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书5</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">个护化妆</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书6</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>教育</dt>
                                        <dd>
                                            <em>
                                                <a href="">教材教辅</a>
                                            </em>
                                            <em>
                                                <a href="">考试</a>
                                            </em>
                                            <em>
                                                <a href="">外语学习</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>其它</dt>
                                        <dd>
                                            <em>
                                                <a href="">英文原版书</a>
                                            </em>
                                            <em>
                                                <a href="">港台图书</a>
                                            </em>
                                            <em>
                                                <a href="">工具书</a>
                                            </em>
                                            <em>
                                                <a href="">套装书</a>
                                            </em>
                                            <em>
                                                <a href="">杂志/期刊</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">运动健康</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书7</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">汽车用品</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书8</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">彩票、旅行</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">理财、众筹</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">母婴、玩具</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">箱包</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">运动户外</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">箱包</a>
                            </h3>
                        </div> -->
          </div>
        </div>
      </transition>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//导入lodash 防抖节流库
import _ from "lodash";
export default {
  data() {
    return {
      //一级分类背景颜色
      currentIndex: -1,
      show: true,
    };
  },
  methods: {
    //鼠标进入三级 改变颜色
    // changeIdex(id) {
    //    this.currentIndex=id
    // },
    //使用节流
    changeIdex: _.throttle(function (id) {
      this.currentIndex = id;
    }, 50),
    //鼠标离开颜色
    leaveIndex() {
      this.currentIndex = -1;
    },
    //进行编程导航
    goSearch(event) {
      //最好的办法 就是编程导航 加事件委托给父盒子
      //利用事件委托存在一些委托
      //1.点击的一定是a标签
      //2.如何获取参数[1,2,3分类的产品名字]
      //点击a标签的时候 才会继续路由[怎么能确定点击一定是a标签]
      //存在另外一个问题，即便确定点击是a标签 如何区分，1,2,3标签
      //第一个问题把子节点当中a标签，我加上自定义属性data-categoryName=这样节点一定是a标签
      //节点有一个属性detaset 可以获取节点的自定义属性和属性值
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;

      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        // location.query = query; this.$router.push(location);
        //判断 如果路由跳转的时候 带有params 一起假传递过去
        if (this.$route.params) {
          location.params = this.$route.params;
          location.query = query;
          this.$router.push(location);
        }
      }
    },
    //serch 模块 三级菜单显示
    antreShow() {
      this.show = true;
    },
    //当在seacrh模块里面 鼠标离开时 隐藏
    enterShow() {
      if (this.$route.path != "/Home") {
        this.show = false;
      }
    },
  },
  //生命周期 挂载发起请求
  mounted() {
    //通知vuex发请求 获取数据

    if (this.$route.path != "/Home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //   &:hover {
          //     .item-list {
          //       display: block;
          //     }
          //   }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    //过渡动画的格式
    //开始过渡
    .sort-enter {
      height: 0px;
    }
    //过渡动画结束时间
    .sort-enter-to {
      height: 461px;
    }
    //动画时间
    .sort-enter-active {
      transition: all 5s linear;
    }
  }
}
</style>
