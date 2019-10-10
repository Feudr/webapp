<template>
    <!-- 猜你喜欢开始 -->
    <div class="like">
        <div class="like-top">
            <img src="/static/images/like-top.png" />
            <span>猜你喜欢</span>
        </div>
        <ul class="like-bottom">
            <li v-for="item in likeList" :key="item.id">
                <!-- 每一个li里面的左边的图片 -->
                <img :src="item.imgUrl" />
                <!-- li右边的文字 -->
                <div class="like-title">
                    <span class="like-title1">{{item.text}}</span>
                    <span class="like-title2">{{item.comments}}</span>
                    <span class="like-title3">{{item.price}}</span>
                </div>
            </li>
        </ul>
    </div>
    <!-- 猜你喜欢结束 -->
</template>

<script>
export default {
    props: ['likeList'],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
/* 猜你喜欢开始 */
.like {
    margin-top: .22rem;
    background-color: #fff;
    font-size: .28rem;
    padding: 0 .1rem;
}
.like-top {
    height: .42rem;
    line-height: .42rem;
}
.like-top img {
    height: .38rem;
    vertical-align: middle;
}
.like-top span {
    font-weight: 600;
    color: #ff8300;
}

.like-bottom li {
    height: 2.1rem;
    display: flex;
    flex-direction: row;
    margin: .1rem 0;
    border-bottom: .02rem solid #e0e0e0;
}
.like-bottom img {
    float: left;
    width: 2.3rem;
    height: 2rem;
    margin-right: .3rem;
}
.like-title {
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.like-title1 {
    font-size: .30rem;
    font-weight: 600;
    color: #616161;
}
.like-title2 {
    font-size: .28rem;
}
.like-title3 {
    font-size: .32rem;
    color: #ff8300;
}
/* 猜你喜欢结束 */
</style>