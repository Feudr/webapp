<template>
    <!-- 图标栏目开始  -->
    <div class="icons">
        <div class="swiper"> 
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- 第一页-->
                <swiper-slide >
                    <div class="icons-item" v-for="item in sceneryList1" :key="item.id">
                        <img :src="item.imgUrl"/>
                        <p>{{item.text}}</p>
                    </div>
                </swiper-slide>
                <!-- 第二页 -->
                <swiper-slide>
                    <div  class="icons-item" v-for="item in sceneryList2" :key="item.id">
                        <img :src="item.imgUrl"/>
                        <p>{{item.title}}</p>
                    </div> 
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["sceneryList1","sceneryList2"],
        data () {
            return {
                swiperOption:{
                    loop: true, // 设置图片循环
                },
            }
        }
    }
</script>

<style scoped>
/* 图标栏目开始 */
.icons .swiper {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
}
.icons-item {
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    /* background-color: #ccc; */
    float: left;
}
.icons-item img {
    display: block;
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
}
.icons-item p {
    font-size: .28rem;
    color: #212121;
    text-align: center;
    margin-top: .13rem;
}
/* 图标栏目结束 */
</style>
