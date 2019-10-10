<template>
    <!-- 头部开始 -->
    <div class="header">
        <div class="header-left" @click="toHome">
            <span class="iconfont">&#xe509;</span>
        </div>
        <div class="header-title">
             城市选择
        </div>
    </div>
    <!-- 头部结束 -->
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push("/")
        }
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
    position: relative;
}
.header-left {
    cursor: pointer;
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: bold;
}
.header-title {
    font-size: .3rem;
    position: absolute;
    top: 0;
    right: 50%;
    margin-right: -.6rem;
}
/* 头部结束 */
</style>