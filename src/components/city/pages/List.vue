<template>
    <div ref="wrapper" class="container">
        <div>
            <!-- 热门城市开始 -->
            <div class="hotCity">
                <div class="hot-top">热门城市</div>
                <ul class="hot-bottom">
                    <li @click='changeCityName(item.name)' v-for='item in hotCity' :key="item.id" class="hot-item">{{item.name}}</li>
                </ul>
            </div>
            <!-- 热门城市结束 -->

            <!-- 26个字母开始 -->
            <div class="sort">
                <div class="sort-top">字母排序</div>
                <ul class="sort-bottom">
                    <li v-for="(val,key) in cities"  class="sort-item" @click="changeSort(key)">{{key}}</li>
                </ul>
            </div>
            <!-- 26个字母结束 -->

            <!-- 字母列表开始 -->
            <div class="list">
                <div v-for="(value,key) in cities" :ref='key'>
                    <div class="list-top">{{key}}</div>
                    <ul class="list-bottom">
                        <li v-for="item in value" :key="item.id" class="list-item">{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <!-- 字母列表结束 -->
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll' 
export default {
    data () {
        return {
            scroll: ''
        }
    },
    mounted() { 
            let wrapper = this.$refs['wrapper'];
            this.scroll = new BScroll(wrapper)
    },
    props: ["hotCity",'cities'],
    methods: {
        changeSort(key) {
            this.scroll.scrollToElement(this.$refs[key][0]);
            // console.log([key]);
        },
        changeCityName(hotCityName) {
            // alert(hotCityName); 
            //回到首页
            this.$router.push('./');
            this.changeCity(hotCityName);
        },
        ...mapMutations(['changeCity'])
    } 
}
</script>

<style scoped>
.container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: .88rem;  /*顶部导航栏的高 */
    overflow: hidden; /*向上滑动，不会遮盖顶部导航栏 */
}
/* 热门城市开始 */
.hot-top {
    font-size: .26rem;
    font-weight: 600;
    color: #212121;
    padding: .15rem;
}
.hot-bottom {
    background: #fff;
    font-size: .25rem;
    /* height: 3.68rem; */
    position: relative;
    overflow: hidden;
}

/* ul加一个伪类标签实现右侧边框 */
.hot-bottom::before {
    content: "";
    position: absolute;
    height: 100%; 
    width: 33.33333%;
    /* 距离左边 */
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    color: #212121;
    width: 33.33333%;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    float: left;
    border-bottom: .02rem solid #ddd;
    position: relative; /*解决被伪类覆盖的问题 */
}
/* 热门城市结束 */

/* 26个字母开始 */
.sort-top {
    font-size: .26rem;
    font-weight: 600;
    color: #212121;
    padding: .15rem;
}

.sort-bottom {
    background: #fff;
    font-size: .23rem;
    height: 3.6rem;
}

.sort-item {
    color: #212121;
    width: 16.66666%;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    float: left;
}
/* 26个字母结束 */

/* 字母列表开始 */
.list-top {
    font-size: .26rem;
    font-weight: 600;
    color: #212121;
    padding: .15rem;
}
.list-bottom {
    background: #fff;
    font-size: .25rem;
    /* height: 3.68rem; */
    position: relative;
    overflow: hidden;
}

/* ul加一个伪类标签实现右侧边框 */
.list-bottom::before {
    content: "";
    position: absolute;
    height: 100%; 
    width: 25%;
    /* 距离左边 */
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.list-bottom::after {
    content: "";
    position: absolute;
    height: 100%; 
    width: 25%;
    /* 距离左边 */
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    /* 不换行，小数点显示 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #212121;
    width: 25%;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    float: left;
    border-bottom: .02rem solid #ddd;
}
/* 字母列表结束 */
</style>