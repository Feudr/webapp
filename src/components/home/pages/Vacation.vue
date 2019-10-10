<template>
    <!-- 周末去哪儿开始 -->
    <div class="vacation">
        <span class="vacation-top">周末去哪儿</span>
        <ul class="vacation-bottom">
            <li v-for="item in vacationList" :key="item.id">
                <img :src="item.imgUrl" />
                <p class="vacation-title">{{item.title}}</p>
                <p class="vacation-text">{{item.text}}</p>
            </li>
        </ul>
    </div>
    <!-- 周末去哪儿结束 -->
</template>

<script>
export default {
    props: ["vacationList"],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
/* 周末去哪儿开始 */
.vacation {
    margin: .22rem .1rem  0 .1rem;
    background-color: #fff;
}
.vacation-top {
    display: block;
    height: .45rem;
    font-size: .28rem;
    font-weight: 600;
    color: #ff8300;
}
.vacation li {
    height: 4rem;
    position: relative;
    margin-bottom: .11rem;
}
.vacation img {
    width: 100%;
    height: 4rem;
}
.vacation-title {
    font-size: .3rem;
    position: absolute;
    bottom: .5rem;
    right: .1rem;
    color: #fff;
}
.vacation-text {
    font-size: .28rem;
    color: #ff8300;
    font-weight: 600;
    position: absolute;
    bottom: .1rem;
    right: .1rem;
}
/* 周末去哪儿结束 */
</style>