<template>
    <!-- 轮播图开始 -->
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- 轮播的图片 -->
            <swiper-slide><img src="/static/images/swiper1.jpg" /></swiper-slide>
            <swiper-slide> <img src="/static/images/swiper2.jpg" /></swiper-slide>
            <swiper-slide><img src="/static/images/swiper3.jpg" /></swiper-slide>
            <!-- 小圆点分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    <!-- 轮播图结束 -->
</template>

<script>
    export default {
        data() {
            return {
                swiperOption:{
                    loop: true, // 设置图片循环
                    autoplay: true, //设置可自动播放
                    speed: 1000, //自动播放的速度，每隔1秒滑动一次
                    pagination: {
                       el: ".swiper-pagination",//分页器的类名
                       clickable: true //设置分页小圆点可手动点击
                    } 
                }              
            }            
        }
    }
</script>

<style scoped>
/* swiper轮播图样式设置开始 */
/* 修改分页小圆点的默认样式 */
.swiper >>>.swiper-pagination-bullet-active {
    background-color: #fff;
}
.swiper {
    background-color: #ccc;
    /* height: 0; */
    /* padding-bottom: 26.27%; */
    width: 100%;
    height: 2.2rem;
}
.swiper img {
    width:100%;
    height: 2.2rem;
}
/* swiper轮播图样式设置结束 */
</style>
