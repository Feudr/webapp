<template>
    <!-- 本周热门榜单布局开始 -->
    <div class="hotList">
        <div class="hot-top">
            <img src="/static/images/hotList1.gif"/>
            <span class="hot-week">本周热门榜单</span>
            <span class="all-list">全部榜单  ></span>
        </div>
        <!-- 风景图信息 -->
        <ul class="hot-scenery" >
            <li class="scenery" v-for="hot in hotList" :key="hot.id">
                <img :src="hot.imgUrl" />
                <p class="scenery-title">{{hot.title}}</p>
                <p class="price">
                    <span>￥{{hot.price}} </span>
                    <span>起</span>
                </p>
            </li>              
        </ul>
    </div>
    <!-- 本周热门榜单布局结束 -->
</template>

<script>
export default {
    props: ["hotList"],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
/* 本周热门榜单布局开始 */
.hot-top {
    padding: 0 .05rem;
    margin-top: .22rem;
    background-color: #fff;
    font-size: .28rem;
    height: .6rem;
}
.hotList img {
    display: inline-block;
    width: .6rem;
    height: .6rem;
    vertical-align: middle;
}
.hotList span {
    display: inline-block; 
    line-height: .6rem;
}
.hot-week {
    font-size: .32rem;
    color:#212121;
    font-weight: 600;
}
.all-list {
    position: absolute;
    right: .1rem;
    font-size: .28rem;
    color: #616161;
}
/* 风景图样式 */
.scenery {
    padding: 0  .1rem;
    width: 2.3rem;
    height: 2.8rem;
    display: inline-block;
}
.hot-scenery {
    background-color: #fff;
    height: 3.1rem;
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
}
.scenery img {
    width: 2.3rem;
    height: 2rem;
}
.scenery p {
    text-align: center;
    font-size: .24rem;
    margin-top: .05rem;
    font-weight: 500;
}
.scenery .price {
    text-align: center;
    margin-top: 0;
    color: #ff8300;
}
/* 本周热门榜单布局结束 */
</style>