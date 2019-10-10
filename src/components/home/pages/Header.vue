<template>
    <!-- 头部开始 -->
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe509;</span>
        </div>
        <div class="header-search">
            <span class="iconfont search">&#xe566;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            <router-link to="/city">
               {{City}}<span class="iconfont triangle">&#xe504;</span>
            </router-link>
        </div>
    </div>
    <!-- 头部结束 -->
</template>

<script>
import {mapState} from 'vuex'
export default {
    //写一个计算属性
    computed: {
        ...mapState(['City'])
    }
}
</script>
<style scoped>
/* 头部开始 */
.header {
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    background-color: #00bcd4; 
    color: #fff;
    font-size: .36rem;
    display: flex;
}
.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.header-search {
    flex: 1; /*中间占满剩下部分 */
    background: #fff;
    height: .6rem;
    margin: .13rem 0;
    border-radius: .1rem;
    color: #999;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
}
.search {
    font-size: .32rem;
}
.header-right {
    font-size: .28rem;
    padding: 0 .2rem;
}
.header-right .triangle {
    font-size: .2rem;
}
.header-right a {
    color: #fff;
}
/* 头部结束 */
</style>